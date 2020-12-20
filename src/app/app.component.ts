import { Component, OnInit } from '@angular/core'

import { SeoService, ThemeService } from '@/core/services'

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly themeService: ThemeService,
    private readonly seoService: SeoService,
  ) {
    this.themeService.load()
  }

  ngOnInit() {
    this.seoService.update(this.seoService.baseSeo)
  }
}
