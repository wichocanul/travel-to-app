import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  background: string = 'assets/imgs/home/header2.jpg';
  weather: string = 'assets/imgs/weather/09d.png';

}
