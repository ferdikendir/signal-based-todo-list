import { Component } from "@angular/core";
import { TodoInfoComponent } from "../todo-info/todo-info.component";
import { NgClass } from "@angular/common";
import { completeTodo, deleteTodo, todos, todoStore } from "@core/store";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styles: ``,
    imports: [TodoInfoComponent, NgClass]
})
export class TodoListComponent {


    todos = todos;

    completeTodo(todo: { id: number, title: string }) {
        completeTodo(todo.id);
    }

    deleteTodo(todo: { id: number, title: string }) {
        deleteTodo(todo.id);
    }

    constructor() {

        todoStore.onChange((state) => {

            localStorage.setItem('todo-state', JSON.stringify(state));
        });
    }

}
