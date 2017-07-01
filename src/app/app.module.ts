import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { UrlBuilderService } from './services/url-builder.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    AuthService,
    UrlBuilderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
