import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './home/main/main.component';
import { HeaderComponent } from './home/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { IntroductionComponent } from './home/introduction/introduction.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
