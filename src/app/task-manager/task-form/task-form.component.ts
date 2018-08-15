import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  inputValue;
  temp : any = {};
  name : string = 'inder'; 
  constructor(
    private taskObject : TaskService
  ) { 

  }
  addTask(){
    this.temp = {};
    this.temp.id = this.taskObject.getTask().length + 1;
    this.temp.title = this.inputValue;
    this.temp.completed = true;
    this.temp.date = new Date();
    this.taskObject.addTaskService(this.temp);
    console.log("add task",this.temp);
  }
  ngOnInit() {

  }

}

