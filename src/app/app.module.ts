import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ErrorService } from './services/error.service';
import { NetworkService } from './services/network.service';
import { UserService } from './services/user.service';
import { ServerService } from './services/server.service';


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
    ErrorService,
    NetworkService,
    UserService, 
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
