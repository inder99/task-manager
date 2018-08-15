import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Object[] = [
    // {
    //   id: 1,
    //   title: "Learn Angular",
    //   completed: true,
    //   date : new Date()
    // },
    // {
    //   id: 2,
    //   title: "Learn React",
    //   completed: true,
    //   date : new Date()
    // }    
  ]

  constructor() { }

  getTask(){
    return this.tasks;
  }
  addTaskService(t :any){
    this.tasks.push(t);
    return this.tasks;
  }  
  deleteTaskService(t :any){
    this.tasks.splice(this.tasks.indexOf(t), t.id);
    return this.tasks;
  }  

}
