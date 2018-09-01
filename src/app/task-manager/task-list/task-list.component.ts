import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service';
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
    private taskObject : TaskService
  ) { 
    this.searchText = '';

  }

  ngOnInit() {
    // this.tasks = this.taskObject.getTask();
    this.taskObject.getTask().subscribe((data) => {
      this.tasks = data;
      // console.log("data",data);
    },(error)=>{

    }
  );
    // console.log("Tasks :",this.tasks);
  }

}
