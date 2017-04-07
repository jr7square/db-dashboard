import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PanelModule, InputTextModule, ButtonModule } from 'primeng/primeng';
import { LogInInputComponent } from './log-in-input/log-in-input.component';


@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  declarations: [LogInInputComponent],
  exports: [
     LogInInputComponent
 ]
})
export class LogInModule { }
