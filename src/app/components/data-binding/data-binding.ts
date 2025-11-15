import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  //Interpolation
  courseName: string = "Angular 20 Tutorial";
  productprice: number = 12500;

  maxLength: number = 5;
  minChar: number = 3;

  //Property binding
  // inputType: string = "radio";
  inputType: string = "checkbox";

  myClassname: string = "myColor";

  constructor(){

  }
//Evemt binding
  showWelcomeMessage(){
    alert("Welcome to Angular 20");
  }
  changeCourseName(){
    this.courseName = "React JS Tutorial";
  }

  onCityChange(){
    alert("City has been Changed");
  }

//ngModel(requires import FormsModule)

}
