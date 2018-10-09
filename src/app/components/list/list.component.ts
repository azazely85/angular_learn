import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/Task';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];
  constructor(
      public tasker: JsonplaceholderService,
      public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.tasker.getTasks().subscribe( (data: Task[]) => {
      if (data) {
        this.tasks = data;
      }
    }, error => {
      console.log(error);
    });
    this.tasker.newTask.subscribe( (data: Task) => {
      if (data['body']) {
          const newTask = Object.assign({}, data['body'], {id: data.id});
        this.tasks.unshift(newTask);
        this.tasker.updateCount(this.tasks.length);
      }
    });
  }
  deleteTask(id) {
      this.tasker.deleteTask(id).unsubscribe();
      this.tasks = this.tasks.filter( task => task.id !== id);
      this.tasker.updateCount(this.tasks.length);
  }
  editTask(task: Task) {
    this.tasker.emitEditTask(task)
  }

  identify(index) {
    return index;
  }

}
