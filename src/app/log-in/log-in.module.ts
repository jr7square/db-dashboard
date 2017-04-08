import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule, InputTextModule, ButtonModule } from 'primeng/primeng';
import { LogInInputComponent } from './log-in-input/log-in-input.component';

const logInRoutes: Routes = [
  {path: '', component: LogInInputComponent}
];

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(logInRoutes)
  ],
  declarations: [LogInInputComponent],
  exports: [
     LogInInputComponent
 ]
})
export class LogInModule { }
