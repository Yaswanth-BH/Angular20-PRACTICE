import { Component, computed, signal, ɵINPUT_SIGNAL_BRAND_WRITE_TYPE } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {

  firstName: string = "Bear";
  productName="Moto"
  courseName = signal<string>("Angular");
  courseDuration = signal("15 Videos");

  courseDetails = computed(()=> this.courseName()+ " - "+ this.courseDuration());

  constructor(){
    //changing normal variable
    this.firstName="Holo";
    console.log(this.firstName);

    //changing signal
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React");
      
    }, 5000);
    console.log(this.courseName());
  }

}
