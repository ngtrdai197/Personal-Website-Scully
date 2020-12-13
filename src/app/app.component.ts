import { Component } from '@angular/core'
import { ThemeService } from './core/services'

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent {
  constructor(private readonly themeService: ThemeService) {
    this.themeService.load()
  }
}
