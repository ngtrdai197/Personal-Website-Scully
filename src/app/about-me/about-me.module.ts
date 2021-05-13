import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { AboutMeComponent } from './about-me.component'
import { ExperiencesComponent } from './components/experiences/experiences.component'
import { IntroduceComponent } from './components/introduce/introduce.component'
import { SharedModule } from '@/shared/shared.module'

const routes: Routes = [
  {
    path: '',
    component: AboutMeComponent,
    children: [
      {
        path: '',
        component: IntroduceComponent,
        data: { animation: 'introduce' },
      },
      {
        path: 'experiences',
        component: ExperiencesComponent,
        data: { animation: 'experiences' },
      },
    ],
  },
]

@NgModule({
  declarations: [AboutMeComponent, ExperiencesComponent, IntroduceComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AboutMeModule {}
