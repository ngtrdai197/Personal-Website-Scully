import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CopyRightComponent, NavigationComponent, SocialIconComponent, ToggleThemeComponent } from './components'
import { SanitizerPipe } from './pipes/sanitizer.pipe'
import { TranslocoRootModule } from '../app/transloco/transloco-root.module'
import { TranslocoService } from '@ngneat/transloco'

const COMPONENTS = [
  SocialIconComponent,
  CopyRightComponent,
  NavigationComponent,
  SanitizerPipe,
  ToggleThemeComponent,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RouterModule, TranslocoRootModule],
  providers: [
    TranslocoService,
  ],
  exports: [...COMPONENTS, TranslocoRootModule],
})
export class SharedModule {
}
