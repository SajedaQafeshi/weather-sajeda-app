import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DayItemComponent } from './day-item/day-item.component';
import { DayInfoComponent } from './day-info/day-info.component';


const routes: Routes = [
  {
    path:'day',
    component: DayItemComponent
  },
  {
    path:"dataInfo",
    component: DayInfoComponent
  },
  {
    path:"**",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
