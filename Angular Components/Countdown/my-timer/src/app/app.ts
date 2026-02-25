import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent } from './countdown/countdown';
import { TodoComponent } from './todo/todo';
import { SignUpComponent } from './sign-up/sign-up';

@Component({
  selector: 'app-root',
  imports: [CountdownComponent, TodoComponent, SignUpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-timer');
}
