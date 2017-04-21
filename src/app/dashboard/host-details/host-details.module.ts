/**
 * Created by Brancucci on 4/20/2017.
 */
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HostDetailsComponent } from './host-details.component';

@NgModule({
  imports: [
    NgModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HostDetailsComponent
  ],
  declarations: [
    HostDetailsComponent
  ],
  bootstrap: [ HostDetailsComponent ]
})
export class BookModule { }
