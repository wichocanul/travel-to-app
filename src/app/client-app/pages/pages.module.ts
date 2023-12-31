import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './home/main/main.component';
import { HeaderComponent } from './home/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { MapComponent } from './home/map/map.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { TourismComponent } from './tourism/tourism/tourism.component';
import { RouterModule } from '@angular/router';
import { TourismHeaderComponent } from './tourism/tourism-header/tourism-header.component';
import { RestaurantComponent } from './restaurant/restaurant/restaurant.component';
import { RestaurantHeaderComponent } from './restaurant/restaurant-header/restaurant-header.component';
import { EventComponent } from './event/event/event.component';
import { EventHeaderComponent } from './event/event-header/event-header.component';
import { PlacesListComponent } from './components/places-list/places-list.component';
import { PlaceDetailsComponent } from './components/place-details/place-details.component';
import { LodgingComponent } from './lodging/lodging/lodging.component';
import { LodgingHeaderComponent } from './lodging/lodging-header/lodging-header.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    IntroductionComponent,
    MapComponent,
    ReviewsComponent,
    TourismComponent,
    TourismHeaderComponent,
    RestaurantComponent,
    RestaurantHeaderComponent,
    EventComponent,
    EventHeaderComponent,
    PlacesListComponent,
    PlaceDetailsComponent,
    LodgingComponent,
    LodgingHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
