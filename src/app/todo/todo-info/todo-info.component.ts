import { Component, computed } from "@angular/core";
import { todos } from "@core/store";

@Component({
    selector: 'app-todo-info',
    template: `
    <div class="flex  flex-row justify-between text-xl text-black">

            <p>

                @if (todoCount() > 0) {
                {{todoCount()}} todo{{todoCount() > 1 ? 's' : ''}}
                } @else {
                No todos
                }

            </p>

            <p>

                @if (completedTodos() > 0) {
                {{completedTodos()}} completed
                } @else {
                No completed todos
                }

            </p>

        </div>`,
    styles: ``
})
export class TodoInfoComponent {


    todoCount = computed(() => {
        return todos().length;
    });

    completedTodos = computed(() => {
        return todos().filter(todo => todo.completed).length;
    });

}

