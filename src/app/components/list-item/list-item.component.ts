import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../models/Task";
import { JsonplaceholderService } from "../../services/jsonplaceholder.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() task: Task;

  constructor(
      public tasker: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  deleteTask(){
    return this.tasker.deleteTask(this.task.id);
  }
}
