import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  info = signal('Invite the bot to your server. \ Add your available dates. \ Share the link. \ Create "Create Event" and let the bot do the rest');
}
