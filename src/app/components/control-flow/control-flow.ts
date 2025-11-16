import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible: boolean = false;

  startingMonthName: string="feb";

  cityList:string[]=["Pune","Mumbai","Panji","Nagpur"]

  studentList:any[]=[
    {name:'A',city:'Pune',isActive:false},
    {name:'B',city:'Mumbai',isActive:false},
    {name:'C',city:'Pune',isActive:true},
    {name:'D',city:'Nagpur',isActive:false},

  ]

  showP(){
    this.isParaVisible = true;
  }
  hideP(){
    this.isParaVisible = false;
  }
}
