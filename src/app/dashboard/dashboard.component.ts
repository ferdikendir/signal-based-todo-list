import { Component, computed } from "@angular/core";
import { todos, todoStore } from "@core/store";
import { SharedModule } from "@shared/shared.module";
import { TodoFormComponent } from "../todo/todo-form/todo-form.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [
        SharedModule,
        TodoFormComponent,
    ]
})
export class DashboardComponent {

    completedTodos = computed(() => todos().filter(todo => todo.completed));

    allTodos = computed(() => todos());

    pendingTodos = computed(() => todos().filter(todo => !todo.completed));

    constructor() {

        todoStore.onChange((state) => {
            localStorage.setItem('todo-state', JSON.stringify(state));
        });

    }
}