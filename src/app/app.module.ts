import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoLComponent } from './todo-l/todo-l.component';
import { TodoLFormComponent } from './todo-l/todo-l-form/todo-l-form.component';
import { TodoLListComponent } from './todo-l/todo-l-list/todo-l-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoLComponent,
    TodoLFormComponent,
    TodoLListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
