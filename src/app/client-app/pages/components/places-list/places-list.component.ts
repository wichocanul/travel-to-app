import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {

  @Input() kindPlace: string = '';

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['kindPlace']) {
      console.log('execute change function')
    }
  }

  redirectDetailsPlace() {
    this.router.navigate([`/${this.kindPlace}`, '123']);
  }

}
