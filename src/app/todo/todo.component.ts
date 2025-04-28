import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoHistoryComponent } from "./todo-history/todo-history.component";
import { SharedModule } from "@shared/shared.module";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    imports: [
        FormsModule,
        TodoListComponent,
        TodoFormComponent,
        TodoHistoryComponent,
        SharedModule
    ]
})
export class TodoComponent {

}