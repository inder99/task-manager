import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
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

  getTask(){
    return this.tasks;
  }
  addTaskService(t :any){
    this.tasks.push(t);
    return this.tasks;
  }  
}
