import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { CalendarComponent } from "./calendar-component/calendar-component";
import { EventName } from "./event-name/event-name";
import { CreateEvent } from "./create-event/create-event";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CalendarComponent, EventName, CreateEvent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('createEventApp');
}
