import { Injectable } from '@angular/core';
import { Task } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];

  constructor() { }

  getTask(){
    return this.tasks;
  }
  addTaskService(t :any): void{
    const temp: Task = {
      id: this.tasks.length + 1,
      title: t,
      completed: false
    }
    this.tasks.push(temp);
  }  
  deleteTaskService(t :any){
    // this.tasks.splice(this.tasks.indexOf(t), t.id);
    this.tasks.forEach((task,index) => {
      if(task.id === t){
        this.tasks.splice(index,1);
      }
    });
    this.tasks.splice(t, 1);
    return this.tasks;
  }  

}
