import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  public inputValue: string = '';
  tempInput = '';
  temp : any = {};

  constructor(
    private taskObject : TaskService
  ) { 

  }
  addTask(){
    // this.temp = {};
    // this.temp.id = this.taskObject.getTask().length + 1;
    // this.temp.title = this.inputValue;
    // this.temp.completed = true;
    // this.temp.date = new Date();
    this.tempInput = this.inputValue;
    this.taskObject.addTaskService(this.tempInput);
    this.tempInput = '';

    return false;
  }
  ngOnInit() {

  }

}

