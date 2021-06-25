import { Component, OnInit } from '@angular/core';

import { facebook, github, linkedin, twitter } from '@/shared/svgIcon';
import { ISocial } from '@/core/models/social.interface';
@Component({
	selector: 'app-social-icon',
	templateUrl: './social-icon.component.html',
	styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent implements OnInit {
	public socials: Array<ISocial & { ariaLabel: string }> = [
		{
			svgLink: twitter,
			link: 'https://twitter.com/ngtrdai197',
			ariaLabel: 'Link to Twitter',
		},
		{
			svgLink: facebook,
			link: 'https://www.facebook.com/ngtrdai197',
			ariaLabel: 'Link to Facebook',
		},
		{
			svgLink: github,
			link: 'https://github.com/ngtrdai197',
			ariaLabel: 'Link to Github',
		},
		{
			svgLink: linkedin,
			link: 'https://www.linkedin.com/in/ngtrdai197/',
			ariaLabel: 'Link to LinkedIn',
		},
	];
	constructor() {}

	ngOnInit() {}
}
