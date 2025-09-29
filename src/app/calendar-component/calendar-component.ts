import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-calendar-component',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ],
  templateUrl: './calendar-component.html',
  styleUrl: './calendar-component.css'
})


export class CalendarComponent{



  //variables to display the months of the month in the HTML
  startingMonth = new Date();
  endingMonth = new Date().setMonth(this.startingMonth.getMonth() + 1);

  //array to display sun-sat in the HTML
  days_of_the_week: String[] = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

  //first day of this month and the next
  today = new Date();
  nextMonthStartingDay = new Date();



  strikethroughChecker = new Date();
  todayMonth = 0;
  month = new Date();

  startingMonthOptions: Date[] = [];
  startingMonthDays: (Date | null) [] = new Array(35).fill(null);
  endingMonthDays: (Date | null) [] = new Array(35).fill(null);
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
    // if (this.startingMonth.valueChanges)
    //    console.log(this.startingMonth.value)


    this.generateDays();
  }


  generateDays() {
    //array for the first month
    this.today.setDate(1);
    this.todayMonth = this.today.getMonth();
    for (var i = 0; i < this.startingMonthDays.length; i++){
      if (i < 7){
        if (i >= this.today.getDay() && (this.todayMonth == this.today.getMonth())){
          this.startingMonthDays[i] = new Date(this.today);
          this.today.setDate(this.today.getDate() + 1); 
        }
      }
      else if (this.todayMonth == this.today.getMonth()){
        this.startingMonthDays[i] = new Date(this.today);
          this.today.setDate(this.today.getDate() + 1); 
      }
     }

     //array for the second month
    this.nextMonthStartingDay.setDate(1);
    this.todayMonth = this.today.getMonth();
    for (var i = 0; i < this.startingMonthDays.length; i++){
      if (i < 7){
        if (i >= this.today.getDay() && (this.todayMonth == this.today.getMonth())){
          this.startingMonthDays[i] = new Date(this.today);
          this.today.setDate(this.today.getDate() + 1); 
        }
      }
      else if (this.todayMonth == this.today.getMonth()){
        this.startingMonthDays[i] = new Date(this.today);
          this.today.setDate(this.today.getDate() + 1); 
      }
     }
  }



  
  // updateDays(){
  //    for (var i = 0; i < this.days.length; i++){
  //     var newDate = new Date();
  //     newDate.setDate(newDate.getDate() + i);
  //     this.days[i] = newDate;
  //   }
  // }

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
        if (this.startingMonthDays[d] != null){
          this.selectDayIndices.add(d);
        }
      }

    }

  }

  }

