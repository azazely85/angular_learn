import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/Task';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];
  constructor(
      public tasker: JsonplaceholderService
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
        this.tasks.unshift(data['body']);
      }
    });
  }
    deleteTask(id) {
        this.tasker.deleteTask(id).unsubscribe();
        this.tasks = this.tasks.filter( task => task.id !== id);
    }
  identify(index) {
    return index;
  }

}
