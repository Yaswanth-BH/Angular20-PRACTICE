import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-pipes',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,DatePipe],
  templateUrl: './component-life-pipes.html',
  styleUrl: './component-life-pipes.css',
})
export class ComponentLifePipes implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  firstName: string = "bear";
  coursename: string = "Angular 20 Tutorial";
  rollNoList=[1,2,3,4,5,6,7,8,9]

  studentObj:any = {
    name:'bear',city:'Pune',state:'MH'
  }

  currentDate:Date=new Date();

  constructor() {
    console.log("constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit");
    //trigger api calls
    //subscribe
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterContentInit");
    //deal with viewChild
    //subscribe
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    //unsubscribe
    //restrict use from navigating
  }

}
