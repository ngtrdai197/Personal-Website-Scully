import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@/app/transloco/transloco-root.module';

const MODULES = [CommonModule, HttpClientModule, TranslocoRootModule];

@NgModule({
	imports: MODULES,
	exports: MODULES,
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parent: CoreModule) {
		if (parent) {
			throw new Error(
				`CoreModule has already been loaded. Import Core modules in the AppModule only.`,
			);
		}
	}
}
