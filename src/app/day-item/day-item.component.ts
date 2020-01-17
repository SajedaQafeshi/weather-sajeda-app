import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-item',
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss']
})
export class DayItemComponent implements OnInit {

  @Input() dayElement:any;
  
  constructor() {

    console.log("dayElement" , this.dayElement);
   }

  ngOnInit() {
  }

}
