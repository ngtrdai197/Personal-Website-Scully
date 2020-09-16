import { Component, HostListener, HostBinding } from '@angular/core'
import { ThemeService } from '@/app/core/services'

@Component({
  selector: 'app-toggle-theme',
  template: `
    <div class="w-full h-full text-2xl">
      <span *ngIf="current === 'dark'; else light">🌜</span>
      <ng-template #light>
        <span>🌞</span>
      </ng-template>
    </div>
  `,
})
export class ToggleThemeComponent {
  @HostBinding('class') get themeToggleClasses() {
    return `w-10 h-10 lg:flex lg:items-center lg:justify-center cursor-pointer absolute top-0 right-0`
  }

  @HostListener('click')
  public onClick() {
    this.themeService.update()
    this.current = this.themeService.theme
  }

  current = this.themeService.theme

  constructor(private readonly themeService: ThemeService) {}
}
