import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { arrowDown, arrowUp } from '@/shared/svgIcon'
import { swipeDownInAnimation } from '@/shared/slide-animation'

@Component({
  selector: 'app-about-me',
  template: `
    <section class="wrapper-me" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
      <div class="mb-16">
        <a
          class="navigate -bottom-35"
          [innerHTML]="svgIcon.svgArrowUp | sanitizer"
          routerLink="/iadn/me"
        ></a>
        <a
          class="navigate -bottom-10"
          [innerHTML]="svgIcon.svgArrowDown | sanitizer"
          routerLink="experiences"
        ></a>
      </div>
    </section>
  `,
  styleUrls: ['./about-me.component.scss'],
  animations: [swipeDownInAnimation],
})
export class AboutMeComponent implements OnInit {
  public svgIcon = {
    svgArrowDown: arrowDown,
    svgArrowUp: arrowUp,
  }
  constructor() {}

  ngOnInit(): void {}

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    )
  }
}
