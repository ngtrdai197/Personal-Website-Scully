import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@/shared/shared.module';
import { HomeComponent } from './home.component';
import { SideComponent } from './side/side.component';
import { TranslocoRootModule } from '../transloco/transloco-root.module';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{ path: '', redirectTo: 'me', pathMatch: 'full' },
			{
				path: 'me',
				loadChildren: () =>
					import('@/app/about-me/about-me.module').then(
						(m) => m.AboutMeModule
					),
				data: { animation: 'me' },
			},
			{
				path: 'blog-list',
				loadChildren: () =>
					import('@/app/blogs/blogs.module').then(
						(m) => m.BlogsModule
					),
				data: { animation: 'blog-list' },
			},
		],
	},
];

@NgModule({
	declarations: [HomeComponent, SideComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		TranslocoRootModule,
	],
})
export class HomeModule {}
