import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-search-model',
  animations: [
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ],
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  @Input() state:string;
  heroTotal = -1;

  listCity = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown",
   "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley",
    "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City",
     "Augusta", "Aurora", "Austin",  "Boston", "Boulder", "Bradenton", "Bremerton",
       "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge",
        "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", 
        "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista",
         "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", 
         "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi",
          "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton",
           "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey",
                "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Lancaster", "Lansing", 
                "Laredo", "Las Cruces", "Port St. Lucie", "Portland", "Portsmouth"
                       , "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda",
                        "Racine", "Raleigh", 
                       "Rancho Cucamonga",
                        "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County",];

  constructor() { 
  }

  ngOnInit() {
  }
  
  updateCriteria(cityFiltter: string) {
	cityFiltter = cityFiltter ? cityFiltter.trim() : '';
	this.listCity = this.listCity.filter(item => item.toLowerCase().includes(cityFiltter.toLowerCase()));
	const newTotal = this.listCity.length;
	if (this.heroTotal !== newTotal) {
		this.heroTotal = newTotal;
	  } else if (!cityFiltter) {
		this.heroTotal = -1;
	  }
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
