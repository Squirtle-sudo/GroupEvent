import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-calendar-component',
  imports: [CommonModule],
  templateUrl: './calendar-component.html',
  styleUrl: './calendar-component.css'
})


export class CalendarComponent{

  today = new Date();
  days: Date[] = new Array(35);
  selectedDays: Set<number> = new Set();
  isDragging = false;
  dragStartDay: number | null = null;
  dragEndDay: number | null = null;

  ngOnInit() {
    this.generateDays();
  }


  generateDays() {
    const startDay  = new Date();
  
    for (var i = 0; i < this.days.length; i++){
      var newDate = new Date();
      newDate.setDate(newDate.getDate() + i);
      if (i <= 0){
        this.days[i] = startDay;
      }
      else
        this.days[i] = newDate;

    }
  }

  onDayMouseDown(day: number) {
    this.isDragging = true;
    this.dragStartDay = day;
    this.dragEndDay = day;
    this.updateSelection();
  }

  onDayMouseEnter(day: number) {
    if (this.isDragging) {
      this.dragEndDay = day;
      this.updateSelection();
    }
  }

  onDayMouseUp() {
    this.isDragging = false;
    this.dragStartDay = null;
    this.dragEndDay = null;
  }

  updateSelection() {
    if (this.dragStartDay !== null && this.dragEndDay !== null) {
      const start = Math.min(this.dragStartDay, this.dragEndDay);
      const end = Math.max(this.dragStartDay, this.dragEndDay);
      this.selectedDays = new Set();
      for (let d = start; d <= end; d++) {
        this.selectedDays.add(d);
      }
    }
  }
}

