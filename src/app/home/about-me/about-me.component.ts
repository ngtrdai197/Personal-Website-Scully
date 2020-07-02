import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  template: `
    <p>
      about-me works!
    </p>
    <ul>
      <li routerLink="/portfolio">Portfolio</li>
      <li routerLink="/overview">Overview</li>
    </ul>
  `,
  styles: [
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
