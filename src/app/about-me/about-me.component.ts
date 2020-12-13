import { Component, OnInit } from '@angular/core'
import { arrowDown } from '@/shared/svgIcon'

@Component({
  selector: 'app-about-me',
  template: `
    <router-outlet></router-outlet>
    <a
      class="absolute -bottom-50 -left-center translate-x-1/2 cursor-pointer"
      [innerHTML]="svgArrowDown | sanitizer"
      routerLink="experiences"
    ></a>
  `,
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  svgArrowDown = arrowDown
  constructor() {}

  ngOnInit(): void {}
}
