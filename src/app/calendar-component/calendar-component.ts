import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'



@Component({
  selector: 'app-calendar-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calendar-component.html',
  styleUrl: './calendar-component.css'
})


export class CalendarComponent{

  startingMonth = new FormControl('');
  endingMonth = new FormControl('');
  days_of_the_week: String[] = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

  today = new Date();
  month = new Date();

  startingMonthOptions: Date[] = [];
  endingMonthOptions: Date[] = [];
  days: Date[] = new Array(35);
  selectedDays: number[] = [];
  selectDayIndices: Set<number> = new Set();
  isDragging = false;
  dragStartDay: number | null = null;
  dragEndDay: number | null = null;
  
  ngOnInit() {
    for (let i = 0; i < 5; i ++){
      const m = new Date();
      if (i > 0){
        m.setDate(1);
      }
      m.setMonth(this.month.getMonth() + i);
      this.startingMonthOptions.push(m)
    }


    this.generateDays();
  }


  generateDays() {
    for (var i = 0; i < this.days.length; i++){
      var newDate = new Date();
      newDate.setDate(newDate.getDate() + i);
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
      this.selectDayIndices = new Set();
      for (let d = start; d <= end; d++) {
        this.selectDayIndices.add(d);
        
      }

    }

  }

  }

