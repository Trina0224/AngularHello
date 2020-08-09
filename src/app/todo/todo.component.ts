import { Component, OnInit } from '@angular/core';
import {TodoModel} from '../_models/todo.model';
import {TODOS} from '../_helpers/mock-todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  appName = "Todo App";

  // todo: TodoModel
  todos: TodoModel[]; //video 12
  selectedTodo: TodoModel; //video 14

  constructor() { }

  ngOnInit(): void {
    // this.todo = {
    //   id: 1,
    //   name: 'First todo',
    //   date: '2020-08-09'
    // };
    this.todos = TODOS; //video 12
    //this.selectedTodo=TODOS[0]; //video 14
  }
  onSelect(todo: TodoModel){//video 14
    this.selectedTodo = todo;
  }

}
