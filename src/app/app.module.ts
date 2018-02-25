import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpModule }  from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

//import { SortPipe } from "./app.sort";

@NgModule({
  declarations: [
  //  SortPipe, 
    AppComponent,
    //ProductComponent,
    //MembersComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    /*RouterModule.forRoot([
     {
       path : 'member',
       component: MembersComponent
     },
     {
       path: 'product',
       component: ProductComponent
     }
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
