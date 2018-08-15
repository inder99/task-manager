import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks : Object;
  constructor(
    private taskObject : TaskService
  ) { 
  }

  ngOnInit() {
    this.tasks = this.taskObject.getTask();
    console.log("Tasks",this.tasks);
  }

}
