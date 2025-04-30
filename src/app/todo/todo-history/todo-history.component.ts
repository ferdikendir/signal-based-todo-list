import { Component, signal } from "@angular/core";
import { history } from "@core/store";
import { StateChangeType } from "@core/store/base/state-change.enum";
import { TodoHistoryItemComponent } from "./todo-history-item/todo-history-item.component";

@Component({
    selector: 'app-todo-history',
    templateUrl: './todo-history.component.html',
    styles: [
        `
        :host {
            display: block;
            width: 100%;
        }
        `
    ],
    imports: [TodoHistoryItemComponent]
})
export class TodoHistoryComponent {

    todoHistory = history;

    stateChangeType = StateChangeType;

    collapsed = signal(false);

}
