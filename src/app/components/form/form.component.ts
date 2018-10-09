import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Task } from '../../models/Task';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  isEdit: boolean;
  taskId: number;
  @ViewChild('form') form;
  constructor(
      public tasker: JsonplaceholderService,
      public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.tasker.editingTask.subscribe((task: Task) => {
      if (this.title) {
        this.isEdit = true;
        this.title = task.title;
        this.taskId = task.id;
      }
    });
  }
  editTask() {
    const updateTask = {
      id: this.taskId,
      title: this.title,
      userId: 1,
      completed: false
    }
    this.tasker.editTask(updateTask).subscribe((data: Task) => {
        this.form.reset();
        this.tasker.emitEditTask(data);
        this.flashMessage.show('Edit success', {
            cssClass: 'alert-success',
            showCloseBtn: true,
            closeOnClick: true,
            timeout: 10000
        });
    }, error => {
        this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            showCloseBtn: true,
            closeOnClick: true,
            timeout: 10000
        });
    });
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
      this.flashMessage.show('Success', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
      });
    });
  }
}
