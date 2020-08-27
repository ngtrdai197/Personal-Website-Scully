import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { OverViewComponent } from './over-view.component'

const routes: Routes = [{ path: '', component: OverViewComponent }]

@NgModule({
  declarations: [OverViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OverViewModule {}
