import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { counterStore } from '@core/store';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-store';

  state = counterStore.select();

  stateRate = counterStore.select(state => state.mode2);

  constructor() {

  }

}
