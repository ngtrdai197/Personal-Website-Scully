import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: 'dark' | 'light'
  private renderer: Renderer2
  constructor(private rendererFactory2: RendererFactory2) {
    this.renderer = this.rendererFactory2.createRenderer(null, null)
  }

  get theme() {
    return this.currentTheme
  }

  load() {
    this.getCurrentTheme()
    this.add(this.theme)
    this.remove(this.theme === 'dark' ? 'light' : 'dark')
  }

  update() {
    const updateTheme = this.theme === 'dark' ? 'light' : 'dark'
    this.remove(this.theme)
    this.add(updateTheme)
    localStorage.setItem('prefers-theme', updateTheme)
    this.currentTheme = updateTheme
  }

  private remove(theme: 'dark' | 'light') {
    this.renderer.removeClass(document.body, `theme-${theme}`)
  }

  private add(theme: 'dark' | 'light') {
    this.renderer.addClass(document.body, `theme-${theme}`)
  }

  private getCurrentTheme() {
    const theme = localStorage.getItem('prefers-theme')
    if (theme != null) {
      return (this.currentTheme = theme as 'dark' | 'light')
    }

    if (window.matchMedia('(prefers-color-theme)').media !== 'not all') {
      return (this.currentTheme = window.matchMedia('(prefers-color-theme: dark)')
        .matches
        ? 'dark'
        : 'light')
    }
    // default to light theme if browser does not support prefers-color-theme
    return (this.currentTheme = 'light')
  }
}
