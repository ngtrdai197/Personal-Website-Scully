import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ScullyLibModule } from '@scullyio/ng-lib'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
