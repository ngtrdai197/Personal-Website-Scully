import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

import { swipeDownInAnimation } from '@/shared/slide-animation';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: [
		`
			.left-side {
				height: fit-content;
			}
		`,
	],
	animations: [swipeDownInAnimation],
})
export class HomeComponent implements OnInit {
	routes$ = this.scullyRoutesService.available$.pipe(
		map(routes => routes.filter(route => route.route.includes('/blog'))),
	);
	constructor(private scullyRoutesService: ScullyRoutesService) {}

	ngOnInit() {}

	public prepareRoute(outlet: RouterOutlet) {
		return (
			outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
		);
	}
}
