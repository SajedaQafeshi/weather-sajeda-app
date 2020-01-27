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

	@Input() state: string;

	listCity = [
		"Abu Dis",
		"Beit Jala",
		"Beit Lahia",
		"Beit Ummar",
		"Bethlehem",
		"ad-Dhahiriya",
		"Dura",
		"Gaza",
		"Halhul",
		"Hebron",
		"Idhna",
		"Jabalia",
		"Jenin",
		"Jericho",
		"Khan Yunis",
		"Nablus",
		"Qabatiya",
		"Rafah",
		"Ramallah",
		"Sa'ir",
		"Surif",
		"Tubas",
		"Tulkarm",
		"Ya'bad",
		"al-Yamun",
		"Yatta"]
	constructor() {
	}

	ngOnInit() {
	}
}
