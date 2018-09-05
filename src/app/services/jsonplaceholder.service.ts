import { Injectable } from '@angular/core';
import { Task } from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  tasks: Task[] = [
      {
        id: '1',
        text: 'Text1'
      },
      {
          id: '2',
          text: 'Text2'
      }
  ];

  constructor() { }

  getTasks(){
    return this.tasks;
  }
}
