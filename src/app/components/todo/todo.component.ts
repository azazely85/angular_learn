import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from "../../models/Todo";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    todo: Todo = {
        id: '',
        title: '',
        text: '',
        complete: false
    }
    @ViewChild('form') form;
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
    addTodo(){
        const newTask = {
            id: String(this.todos.length + 1),
            title: this.todo.title,
            text: this.todo.text,
            complete: false,
        }
        this.todos.unshift(newTask);

        this.form.reset();
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
