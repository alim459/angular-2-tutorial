import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    MaterialModule.forRoot()
  ],
  declarations: [ AppComponent,
    ProductListComponent,
    StarComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
