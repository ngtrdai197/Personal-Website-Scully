import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { arrowDown } from '@/shared/svgIcon'
import { swipeDownInAnimation } from '@/shared/slide-animation'

@Component({
  selector: 'app-about-me',
  template: `
    <section class="wrapper-me" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
      <a
        class="absolute -bottom-50 -left-center translate-x-1/2 cursor-pointer"
        [innerHTML]="svgArrowDown | sanitizer"
        routerLink="experiences"
      ></a>
    </section>
  `,
  styleUrls: ['./about-me.component.scss'],
  animations: [swipeDownInAnimation],
})
export class AboutMeComponent implements OnInit {
  svgArrowDown = arrowDown
  constructor() {}

  ngOnInit(): void {}

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    )
  }
}
