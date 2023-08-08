import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {

  @Input() kindPlace: string = '';

  constructor(private router: Router) { }

  redirectDetailsPlace() {
    this.router.navigate(['/turismo', '123']);
  }

}
