import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/Task';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor(
      public tasker: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  deleteOneTask() {
    this.delete.emit(this.task.id);
  }

  editTask() {
  const updateTask = Object.assign({}, this.task);
      this.edit.emit(updateTask);
  }
}
