import { Component, OnInit } from '@angular/core'

import { ISeo, SeoService, ThemeService } from '@/core/services'
import { environment as env } from '@/environments/environment'

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
