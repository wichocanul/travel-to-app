import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './client-app/pages/home/main/main.component';
import { TourismComponent } from './client-app/pages/tourism/tourism/tourism.component';
import { RestaurantComponent } from './client-app/pages/restaurant/restaurant/restaurant.component';
import { EventComponent } from './client-app/pages/event/event/event.component';
import { PlaceDetailsComponent } from './client-app/pages/components/place-details/place-details.component';

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
    path: 'turismo/:id',
    component: PlaceDetailsComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantComponent
  },
  {
    path: 'restaurantes/:id',
    component: PlaceDetailsComponent
  },
  {
    path: 'eventos',
    component: EventComponent
  },
  {
    path: 'eventos/:id',
    component: PlaceDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
