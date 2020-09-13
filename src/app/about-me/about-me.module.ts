import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { AboutMeComponent } from './about-me.component'

const routes: Routes = [{ path: '', component: AboutMeComponent }]

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutMeModule {}
