import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  ToDoLists: Todo[] = [
  { 
    task: "Pet Dog",
    completed: true
  },
  {
    task: "Pet Cat",
    completed: true

  },
  {
    task: "Eat Donut",
    completed: false

  }

  ];

  addTasks(form:NgForm):void{
    let newTask:Todo = {
      task: form.form.value.task,
      completed: false

    }
    this.ToDoLists.push(newTask)

  }

  completeTask(task:Todo):void{
  task.completed = true;

  }

}
