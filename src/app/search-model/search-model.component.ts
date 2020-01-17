import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  @Input() state:string;
  @Output() stateChange = new EventEmitter<string>();
  constructor() { 
  }

  ngOnInit() {
  }
  changeState(value:string) {
    this.close();
    this.stateChange.emit(value);
  }
  close() {
    this.state = "none";
    
  }
}
