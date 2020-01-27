import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DayItemComponent } from './day-item/day-item.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { LoginComponent } from './login/login.component';
import { SearchModelComponent } from './search-model/search-model.component';
import { CityInfoComponent } from './city-info/city-info.component';


const routes: Routes = [
	{
		path: 'day',
		component: DayItemComponent
	},
	{
		path: "dataInfo",
		component: DayInfoComponent
	},
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'search',
		component: SearchModelComponent
	},
	{
		path: 'info/city/:city',
		component: CityInfoComponent
	},
	{
		path: '**',
		component: LoginComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
