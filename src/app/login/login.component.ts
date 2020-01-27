import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, Event } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginArray = [
		{
			email:"ssaajjiiddaa@pseu.edu",
			password:"12345678ff0"
		},
		{
			email:"ssss@pseu.edu",
			password:"123456789ff0"
		},
		{
			email:"asd@pseu.edu",
			password:"12345678f90"
		},
		{
			email:"aaa@pseu.edu",
			password:"123456789fff0"
		}
	];
	loginResult = true;
	constructor(private router: Router) { }

	ngOnInit() {
	}

	login(form :NgForm) { 
		let user = {
			email :form.value.email,
			password :form.value.password
		}

		let result = this.loginArray.filter(item => (item.email == user.email && item.password == user.password));
		console.log(result );

		if (result.length != 0) {
			this.router.navigateByUrl('/home');

		} else {
			this.loginResult = false;
			form.value.email ="";
			form.value.password="";
		}	
	}
}
