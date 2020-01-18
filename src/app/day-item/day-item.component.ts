import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss']
})
export class DayItemComponent implements OnInit {

  @Input() dayElement:any;
  @Input() index:number;
  colorItem = ["#f2bf28","#66b5af","#f28277","#3B5D8B"];

  constructor() {

    console.log("dayElement" , this.dayElement);
    console.log(this.colorItem);
    console.log(this.index);
   }

  ngOnInit() {
  }

}
