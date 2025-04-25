import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { addTodo } from "@core/store";

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styles: ``,
    imports: [FormsModule]
})
export class TodoFormComponent {

    todoTitle = signal('');

    addTodo() {

        if (this.todoTitle().trim() === '') {
            return;
        }

        addTodo(this.todoTitle());
        this.todoTitle.set('');
    }

}
