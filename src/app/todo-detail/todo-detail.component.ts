import { Component, OnInit, Input } from '@angular/core';
import {TodoModel} from '../_models/todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  //selectedTodo: TodoModel; //video 18
  //video 19
  @Input() todoChild: TodoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
