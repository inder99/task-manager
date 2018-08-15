import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../../services/task.service';
 @Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input('taskItem') task : Object;
  constructor(
    private taskObject : TaskService
  ) { }
  deleteTask(){
    this.taskObject.deleteTaskService(this.task);
  }
  ngOnInit() {
  }

}
