import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyCvComponent } from './my-cv.component';

@NgModule({
	declarations: [MyCvComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: MyCvComponent,
			},
		]),
	],
})
export class MyCvModule {}
