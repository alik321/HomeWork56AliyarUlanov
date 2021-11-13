import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { IngredientsComponent } from './ingredients/ingredients.component';
import { BurgerComponent } from './burger/burger.component';

@NgModule({
  declarations: [
    AppComponent,
    IngredientsComponent,
    BurgerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
