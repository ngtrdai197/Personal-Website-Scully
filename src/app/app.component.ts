import { Component, OnInit } from '@angular/core'

import { SeoService, ThemeService } from '@/core/services'
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
    this.seoService.update({
      title: 'Dai Nguyen',
      route: `${env.baseUrl}`,
      url: `${env.baseUrl}`,
      image: `${env.baseUrl}/assets/avatar.jpeg`,
      description:
        'I am a developer who is highly interested in TypeScript. My tech stack has been full-stack TS such as Angular, React with TypeScript and NestJS.',
    })
  }
}
