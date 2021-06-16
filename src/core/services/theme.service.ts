import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

import { THEME } from '@/shared/enums/theme.enum';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private currentTheme: THEME;
	private renderer: Renderer2;
	private _themeSubject = new BehaviorSubject<THEME>(null);

	public theme$ = this._themeSubject.asObservable();

	constructor(private rendererFactory2: RendererFactory2) {
		this.renderer = this.rendererFactory2.createRenderer(null, null);
	}

	get theme(): THEME {
		return this.currentTheme;
	}

	load() {
		this.getCurrentTheme();
		this.add(this.theme);
		this.remove(this.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);
		this._themeSubject.next(this.theme);
	}

	update() {
		const updateTheme = this.theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
		this.remove(this.theme);
		this.add(updateTheme);
		localStorage.setItem('prefers-theme', updateTheme);
		this.currentTheme = updateTheme;
		this._themeSubject.next(updateTheme);
	}

	private remove(theme: THEME) {
		this.renderer.removeClass(document.body, `theme-${theme}`);
	}

	private add(theme: THEME) {
		this.renderer.addClass(document.body, `theme-${theme}`);
	}

	private getCurrentTheme() {
		const theme = localStorage.getItem('prefers-theme');
		if (theme != null) {
			return (this.currentTheme = theme as THEME);
		}

		if (window.matchMedia('(prefers-color-theme)').media !== 'not all') {
			return (this.currentTheme = window.matchMedia(
				'(prefers-color-theme: dark)',
			).matches
				? THEME.DARK
				: THEME.LIGHT);
		}
		// default to light theme if browser does not support prefers-color-theme
		return (this.currentTheme = THEME.LIGHT);
	}
}
