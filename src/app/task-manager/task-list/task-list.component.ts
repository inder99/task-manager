import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  // tasks: string[] = [
  //   'Learn React',
  //   'Learn Angular',
  //   'Learn Mongo',
  //   'Learn Node'
  // ]
  tasks : Object[] = [
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
      date : new Date()
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
      date : new Date()
    },
    {
      id: 3,
      title: "Learn Mongo",
      completed: false,
      date : new Date()
    },
    {
      id: 4,
      title: "Learn Node",
      completed: false,
      date : new Date()
    }    
  ]
  constructor() { }

  ngOnInit() {
  }

}
