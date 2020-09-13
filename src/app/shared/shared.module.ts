import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import {
  SocialIconComponent,
  CopyRightComponent,
  NavigationComponent,
} from './components'
import { SanitizerPipe } from './pipes/sanitizer.pipe'

const COMPONENTS = [
  SocialIconComponent,
  CopyRightComponent,
  NavigationComponent,
  SanitizerPipe,
]

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, RouterModule],
  exports: COMPONENTS,
})
export class SharedModule {}
