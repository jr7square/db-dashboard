import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { LogInModule } from 'app/log-in/log-in.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    LogInModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
