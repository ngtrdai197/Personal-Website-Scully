import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverViewComponent } from './over-view.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: OverViewComponent }]

@NgModule({
  declarations: [OverViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OverViewModule { }
