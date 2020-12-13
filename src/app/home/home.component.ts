import { Component, OnInit } from '@angular/core'
import { ScullyRoutesService } from '@scullyio/ng-lib'
import { map } from 'rxjs/operators'
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
})
export class HomeComponent implements OnInit {
  routes$ = this.scullyRoutesService.available$.pipe(
    map((scullyRoutes) =>
      scullyRoutes.filter((scullyRoute) => scullyRoute.route.includes('/blog')),
    ),
  )
  constructor(
    private scullyRoutesService: ScullyRoutesService,
  ) {}

  ngOnInit() {
    
  }
}
