import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks : Task[] = [];
  apiURl : string = 'http://localhost:3000/';
  task : string = "Tasks";
  constructor(private http: HttpClient) { }

  getTask() : Observable<Task[]>{
    let api = this.apiURl + this.task;
    return this.http.get<Task[]>(api);
  }

  getIndividualTask(id : number) : Observable<Task> {
    let api = this.apiURl + this.task;
    return this.http.get<Task>(api+'/'+id);
  }

  addTaskService(t :any,len: any) : Observable<Task[]>{
    console.log(this.getTask());
    let api = this.apiURl + this.task;
    const temp: Task = {
      id: len + 1,
      title: t,
      completed: false
    }
    // this.tasks.push(temp);
    return this.http.post<Task[]>(api,temp);
  }  
  deleteTaskService(t :any) : Observable<Task[]>{
    let api = this.apiURl + this.task;
    return this.http.delete<Task[]>(api + '/' + t);
  }  

}
      // this.tasks.splice(this.tasks.indexOf(t), t.id);
    // this.tasks.forEach((task,index) => {
    //   if(task.id === t){
    //     this.tasks.splice(index,1);
    //   }
    // });

    // this.tasks.splice(t, 1);