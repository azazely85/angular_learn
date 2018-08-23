import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos: Todo[];

    constructor() { }

    ngOnInit() {
        this.todos =[
            {
                title: 'Task 1',
                text: 'My text 1',
                complete: true,
            },
            {
                title: 'Task 2',
                text: 'My text 2',
                complete: false,
            },
        ]
    }

    deleteTask(i){
        this.todos.splice(i, 1);
    }

    changeTask(i){
        this.todos[i].complete = !this.todos[i].complete;
    }

}
