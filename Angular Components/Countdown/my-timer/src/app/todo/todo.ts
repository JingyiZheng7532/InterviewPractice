import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class TodoComponent {
  public newTodo: string = '';
  public todoList: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoList.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
