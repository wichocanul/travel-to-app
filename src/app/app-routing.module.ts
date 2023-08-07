import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './client-app/pages/home/main/main.component';
import { TourismComponent } from './client-app/pages/tourism/tourism/tourism.component';
import { RestaurantComponent } from './client-app/pages/restaurant/restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'turismo',
    component: TourismComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
