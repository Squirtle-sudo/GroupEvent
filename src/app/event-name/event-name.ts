import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-name',
  imports: [FormsModule, CommonModule],
  templateUrl: './event-name.html',
  styleUrl: './event-name.css'
})
export class EventName {
  eventName: String = '';

  startingTime:String[] = ['12:00 am','1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am',
     '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm','1:00 pm', '2:00 pm', '3:00 pm',
     '4:00 pm', '5:00 pm', '6:00 pm','7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm']

  endingTime:String[] = ['12:00 am','1:00 am', '2:00 am', '3:00 am', '4:00 am', '5:00 am', '6:00 am',
     '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm','1:00 pm', '2:00 pm', '3:00 pm',
     '4:00 pm', '5:00 pm', '6:00 pm','7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm', '11:00 pm']

  startingTimeChosen: String = 'Starting Time';   
  endingTimeChosen: String = 'Ending Time';

  startingTimeNum: number = 12;
  startingTimeisAm:boolean = true;

  endingTimeNum: number = 11;
  endingTimeisAm: boolean = false;

  updateStartingVariables(){
    this.startingTimeNum = this.whatTime(this.startingTimeChosen);
    this.startingTimeisAm = this.ampm(this.startingTimeChosen);
  }
  updateEndingVariables(){
    this.endingTimeNum = this.whatTime(this.endingTimeChosen);
    this.endingTimeisAm = this.ampm(this.endingTimeChosen);
  }

  ampm(time: String){  
    if (time.includes("pm")){
      return false;
    }
    else
      return true;
  };
  whatTime(time: String){
    var startingTimeHour = time;
    if (startingTimeHour.length ==8){
      startingTimeHour = startingTimeHour.substring(0,2)
    }
    else
      startingTimeHour = startingTimeHour.substring(0,1)
    
    return Number(startingTimeHour);

  }




}
