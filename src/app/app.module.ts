import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {ReversePipe} from './reverse.pipe';
import {OrderByPipe} from './order-by.pipe';
import {SortPipe} from "./sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    OrderByPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
