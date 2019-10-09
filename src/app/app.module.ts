import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMetaComponent } from './new-meta/new-meta.component';
import { TestMetaComponent } from './test-meta/test-meta.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMetaComponent,
    TestMetaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
