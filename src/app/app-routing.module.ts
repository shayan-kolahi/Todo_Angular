import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoLComponent} from "./todo-l/todo-l.component";

const routes: Routes = [
  {path : "" , component : TodoLComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
