import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@/app/transloco/transloco-root.module';

const MODULES = [CommonModule, HttpClientModule, TranslocoRootModule];

@NgModule({
	imports: MODULES,
	exports: MODULES,
})
export class CoreModule {}
