import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { BlogsComponent } from './blogs.component'

const routes: Routes = [{ path: '', component: BlogsComponent }]

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogsModule {}
