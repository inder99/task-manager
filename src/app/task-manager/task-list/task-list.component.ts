import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MessageService } from '../../services/message.service';
import { Task } from '../../models/task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks : Task[] = null;
  public searchText : string;
  constructor(
    private taskObject : TaskService,
    private messageObject : MessageService
  ) { 
    this.searchText = '';

  }

  ngOnInit() {
    // console.log("Tasks :",this.tasks);
    this.getTaskGet();
    this.messageObject.getMessage().subscribe((data)=>{
      this.getTaskGet();
    })
  }

  getTaskGet(){
        // this.tasks = this.taskObject.getTask();
        this.taskObject.getTask().subscribe((data) => {
          this.tasks = data;
          // console.log("data",data);
        },(error)=>{
    
        }
      );
    
  }

}
