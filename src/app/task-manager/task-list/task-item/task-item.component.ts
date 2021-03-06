import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import {MessageService} from '../../../services/message.service';
import { Task } from '../../../models/task';

 @Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {
  @Input('taskItem') task : Task;
  constructor(
    private taskObject : TaskService,
    private messageObject : MessageService,
    private router : Router
  ) { }
  deleteTask(){
    this.taskObject.deleteTaskService(this.task.id).subscribe(
      del =>{
        this.messageObject.setMessage('Task Deleted');
      }
    )
    // window.location.reload();
  }
  reverseTask(){
    let temp ={
      id : this.task.id,
      completed : !this.task.completed
    }
    this.taskObject.doneTaskService(temp).subscribe( (reverser)=>{
        console.log("Reverse",reverser);
    }
    );
    this.router.navigate(['/tasks/details/'+this.task.id]);    
  }  
  doneTask(){
    let temp ={
      id : this.task.id,
      completed : !this.task.completed
    }
    this.taskObject.doneTaskService(temp).subscribe(() => {
      this.messageObject.setMessage('TASK_COMPLETED');
    });
    // window.location.reload();
  }
  ngOnInit() {
  }

}
