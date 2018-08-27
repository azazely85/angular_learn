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
                id: '1',
                title: 'Task 1',
                text: 'My text 1',
                complete: true,
            },
            {
                id: '2',
                title: 'Task 2',
                text: 'My text 2',
                complete: false,
            },
        ]
    }

    deleteTask(id: string){
        this.todos = this.todos.filter(task => task.id !== id);
    }

    changeTask(i){
        this.todos[i].complete = !this.todos[i].complete;
    }
    identify(index){
        return index;
    }

}
