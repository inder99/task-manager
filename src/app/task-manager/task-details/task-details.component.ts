import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from "../../services/task.service";
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  sid : any;
  taskSingle : string = null;
  constructor( private route : ActivatedRoute,
  private taskService : TaskService) { }

  ngOnInit() {
    this.sid = this.route.params.subscribe((data)=>{
      this.taskService.getIndividualTask(data.id).subscribe((singleTask) =>{
        this.taskSingle = singleTask.title;
      });
      console.log("Data",data);
      this.sid = data.id;
      console.log("Id",this.sid);
    });
  }

}
