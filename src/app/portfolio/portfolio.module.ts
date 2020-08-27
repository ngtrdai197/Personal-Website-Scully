import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { PortfolioComponent } from './portfolio.component'

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
]

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PortfolioModule {}
