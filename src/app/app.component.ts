import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-store';

  constructor() {

  }

}
