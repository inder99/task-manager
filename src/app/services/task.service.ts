import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];
  apiURl : string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getTask() : Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURl);    
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
