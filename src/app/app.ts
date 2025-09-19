import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Calendar } from "./calendar/calendar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,  Calendar ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('createEventApp');
}
