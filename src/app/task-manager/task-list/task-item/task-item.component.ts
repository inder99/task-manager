import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';
 @Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input('taskItem') task : Task;
  constructor(
    private taskObject : TaskService
  ) { }
  deleteTask(){
    this.taskObject.deleteTaskService(this.task.id).subscribe(
      del =>{
        console.log("Delete",del);
      }
    )
    window.location.reload();
  }
  ngOnInit() {
  }

}
