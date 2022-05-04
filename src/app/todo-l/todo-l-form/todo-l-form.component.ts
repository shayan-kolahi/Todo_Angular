import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-l-form',
  templateUrl: './todo-l-form.component.html',
})
export class TodoLFormComponent implements OnInit {
  inputElm:any = "";
  loc:any = localStorage.getItem("arr")
  clickInput() {
    let local = JSON.parse(this.loc)
    if(local && Array.isArray(local)){
      local.unshift(this.inputElm);
    }else {
      local = [];
      local.unshift(this.inputElm);
    }
    localStorage.setItem("arr" , JSON.stringify(local))
    this.inputElm = ""
  }
  ngOnInit(): void {
  }
}
