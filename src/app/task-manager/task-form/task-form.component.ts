import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  tempInput = '';
  totalTaskLength : number;

  constructor(
    private taskObject : TaskService
  ) { 

  }
  removerUser(){
    localStorage.removeItem('user');
  }
  
  addTask(inputValue){
    this.taskObject.getTask().subscribe((data)=>{
      this.totalTaskLength = data.length;
      // console.log("Total Lenght",this.totalTaskLength);
    });
    this.tempInput = inputValue;
    this.taskObject.addTaskService(this.tempInput,this.totalTaskLength).subscribe(
      (article) =>{
        // console.log("Add Task "+article[0]);
        // console.log("Add Task "+this.tempInput);
      }
    )
    this.tempInput = '';
    return false;
  }
  reloading()
  {
    window.location.reload();
  }
  ngOnInit() {

  }

}

