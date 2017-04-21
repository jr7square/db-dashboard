/**
 * Created by Brancucci on 4/20/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    SearchComponent
  ],
  bootstrap: [ SearchComponent ]
})
export class SearchModule { }
