import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

import { latestByDate } from '../../shared/utils/operators/latest-by-date.operator';
import { ISeo } from '../../core/services';

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
	public readonly routes$ = this.scullyRoutesService.available$.pipe(
		map(scullyRoutes =>
			scullyRoutes.filter(scullyRoute => scullyRoute.route.includes('/blog/')),
		),
		latestByDate<ISeo[]>(),
	);

	constructor(private scullyRoutesService: ScullyRoutesService) {}

	ngOnInit(): void {}
}
