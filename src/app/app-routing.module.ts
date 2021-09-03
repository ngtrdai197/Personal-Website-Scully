import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{
		path: 'iadn',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
	},
	{
		path: 'my-cv',
		loadChildren: () =>
			import('@/app/my-cv/my-cv.module').then(m => m.MyCvModule),
		data: { animation: 'my-cv' },
	},
	{
		path: '404',
		component: PageNotFoundComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
