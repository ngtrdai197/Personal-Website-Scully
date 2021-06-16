import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	CopyRightComponent,
	NavigationComponent,
	SocialIconComponent,
	ToggleThemeComponent,
} from './components';
import { SanitizerPipe } from './pipes/sanitizer.pipe';

const COMPONENTS = [
	SocialIconComponent,
	CopyRightComponent,
	NavigationComponent,
	ToggleThemeComponent,
];

const PIPES = [SanitizerPipe];

const DELEXS = [...COMPONENTS, ...PIPES];
@NgModule({
	declarations: DELEXS,
	imports: [CommonModule, RouterModule],
	exports: DELEXS,
})
export class SharedModule {}
