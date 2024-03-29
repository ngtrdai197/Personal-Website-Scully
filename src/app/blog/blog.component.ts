import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { shareReplay, tap } from 'rxjs/operators';

import { ISeo, SeoService } from '@/core/services';
import { environment as env } from '@/environments/environment';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
	preserveWhitespaces: true,
	encapsulation: ViewEncapsulation.Emulated,
})
export class BlogComponent implements OnInit, OnDestroy {
	private subscription: Subscription = new Subscription();
	constructor(
		private readonly scullyRoutesService: ScullyRoutesService,
		private readonly seoService: SeoService,
	) {}

	ngOnInit() {
		this.subscription.add(
			this.scullyRoutesService
				.getCurrent()
				.pipe(
					tap((blog: ISeo) => {
						this.seoService.update(this.getDataSeo(blog));
					}),
					shareReplay(1),
				)
				.subscribe(),
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	private getDataSeo(data: ISeo): ISeo {
		if (data.title) {
			return {
				...data,
				url: `${env.baseUrl}${data.route}`,
				image: `${env.baseUrl}/${data.image}`,
			};
		}
		return this.seoService.baseSeo;
	}
}
