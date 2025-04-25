import { NgClass } from "@angular/common";
import { Component, input, Input, signal } from "@angular/core";
import { TodoHistory } from "@core/store";
import { StateChangeType } from "@core/store/base/state-change.enum";

@Component({
    selector: 'app-todo-history-item',
    templateUrl: './todo-history-item.component.html',
    styles: ``,
    imports: [NgClass]
})
export class TodoHistoryItemComponent {

    history = input.required<TodoHistory>();

    collapsed = signal(false);

    stateChangeType = StateChangeType;

}
