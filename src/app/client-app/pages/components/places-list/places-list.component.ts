import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from 'src/app/client-app/services/map/map.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {

  @Input() kindPlace: string = '';

  constructor(private router: Router,
              private mapService: MapService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['kindPlace']) {
      this.getPlaces();
    }
  }

  redirectDetailsPlace() {
    this.router.navigate([`/${this.kindPlace}`, '123']);
  }

  getPlaces() {
    this.mapService.kindPlaces(this.kindPlace)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }

}
