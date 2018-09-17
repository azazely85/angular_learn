import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  @ViewChild('form') form;
  constructor(
      public tasker: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  addTask() {
    const newTask = {
      userId: 1,
      completed: false,
      title: this.title
    };
    this.tasker.addTask(newTask).subscribe( (data: Task) => {
      this.form.reset();
      this.tasker.emitNewTask(data);
    });
  }
}
