import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
	routes$ = this.scullyRoutesService.available$.pipe(
		map(scullyRoutes =>
			scullyRoutes.filter(scullyRoute => scullyRoute.route.includes('/blog/')),
		),
	);

	constructor(private scullyRoutesService: ScullyRoutesService) {}

	ngOnInit(): void {}
}
