import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './home/main/main.component';
import { HeaderComponent } from './home/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { MapComponent } from './home/map/map.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { TourismComponent } from './tourism/tourism/tourism.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    IntroductionComponent,
    MapComponent,
    ReviewsComponent,
    TourismComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
