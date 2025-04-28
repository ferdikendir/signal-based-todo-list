import { Component } from "@angular/core";
import { todos } from "@core/store";
import { SharedModule } from "@shared/shared.module";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [
        SharedModule
    ]
})
export class DashboardComponent {
    completedTodos = todos().filter(todo => todo.completed);
    allTodos = todos();
    pendingTodos = todos().filter(todo => !todo.completed);
}