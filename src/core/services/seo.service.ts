import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { ScullyRoute } from '@scullyio/ng-lib';

import { environment as env } from '@/environments/environment';

export interface ISeo extends ScullyRoute {
	url?: string;
	publishedAt?: string;
	descriptions?: string;
	tags?: string[];
}

@Injectable({
	providedIn: 'root',
})
export class SeoService {
	constructor(
		private readonly meta: Meta,
		private readonly title: Title,
		@Inject(DOCUMENT) private readonly dom: Document,
	) {}

	public get baseSeo(): ISeo {
		return {
			title: 'Dai Nguyen',
			route: `${env.baseUrl}`,
			url: `${env.baseUrl}`,
			image: `${env.baseUrl}/assets/avatar-cover.jpeg`,
			description:
				'I am a developer who is highly interested in TypeScript. My tech stack has been full-stack TS such as Angular, React with TypeScript and NestJS.',
		};
	}

	public update(seo: ISeo) {
		this.title.setTitle(SeoService.getTitle(seo.title));

		this.meta.updateTag({ property: 'og:title', content: seo.title });

		this.meta.updateTag({ name: 'twitter:title', content: seo.title });

		this.meta.updateTag({
			name: 'twitter:description',
			content: seo.description,
		});

		this.meta.updateTag({
			property: 'og:description',
			content: seo.description,
		});

		this.meta.updateTag({ name: 'description', content: seo.description });

		this.meta.updateTag({ property: 'og:url', content: seo.url });

		this.meta.updateTag({ name: 'twitter:creator', content: '@nguyendai.dev' });

		this.meta.updateTag({
			name: 'twitter:card',
			content: 'summary_large_image',
		});

		this.meta.updateTag({ property: 'og:type', content: 'website' });

		if (seo.tags?.length) {
			this.meta.updateTag({ name: 'keywords', content: seo.tags.join(', ') });
		}

		if (seo.image) {
			this.meta.updateTag({ name: 'twitter:image', content: seo.image });
			this.meta.updateTag({ property: 'og:image', content: seo.image });
			this.meta.updateTag({ property: 'og:image:width', content: '150' });
			this.meta.updateTag({ property: 'og:image:height', content: '150' });
		}

		this.updateCanonical(seo.url);
	}

	public updateTagTitle(tagName: string) {
		this.resetMeta();
		this.title.setTitle(SeoService.getTitle(tagName));
	}

	public resetMeta() {
		this.meta.removeTag("property='og:title'");
		this.meta.removeTag("property='og:description'");
		this.meta.removeTag("property='og:url'");
		this.meta.removeTag("property='og:image'");
		this.meta.removeTag("property='og:image:width'");
		this.meta.removeTag("property='og:image:height'");
		this.meta.removeTag("name='twitter:title'");
		this.meta.removeTag("name='twitter:description'");
		this.meta.removeTag("name='twitter:image'");
		this.meta.removeTag("name='twitter:card'");
		this.meta.removeTag("name='twitter:creator'");
		this.meta.removeTag("name='keywords'");

		this.meta.updateTag({
			name: 'description',
			content: 'Personal blog by Dai Nguyen',
		});
		this.title.setTitle('Dai Nguyen');
		this.updateCanonical();
	}

	private static getTitle(title: string) {
		return `${title} | Developer`;
	}

	private updateCanonical(url: string = env.baseUrl) {
		let head = this.dom.querySelector('head');
		if (head != null && Array.isArray(head)) {
			head = head[0];
		}
		let element: HTMLLinkElement =
			this.dom.querySelector(`link[rel='canonical']`) || null;
		if (!element) {
			element = this.dom.createElement('link') as HTMLLinkElement;
			head?.appendChild(element);
		}
		element.setAttribute('rel', 'canonical');
		element.setAttribute('href', url);
	}
}
