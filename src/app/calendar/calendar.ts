import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css'],
  imports: [CommonModule]
})
export class Calendar {
  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  days: number[] = [];
  selectedDays: Set<number> = new Set();
  isDragging = false;
  dragStartDay: number | null = null;
  dragEndDay: number | null = null;

  ngOnInit() {
    this.generateDays();
  }

  generateDays() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
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
