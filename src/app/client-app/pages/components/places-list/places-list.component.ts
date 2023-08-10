import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceData } from 'src/app/client-app/interfaces/places.interface';
import { MapService } from 'src/app/client-app/services/map/map.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent {

  listPlaces: PlaceData[] = [];
  titlePlace: string = '';
  descriptionPlace: string = '';
  imgsPlace: string[] = [];
  currentImg: string = '';
  nameEventPlace: string = '';
  dayEventPlace: string = '';
  hourEventPlace: string = '';

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

          this.listPlaces = resp.data;

          if(resp.data.length > 0){
            this.placeDetails(0);
            this.changeImg(0);
          }

        },
        error: (err) => {
          console.error(err);
        }
      })
  }

  placeDetails(index: number) {
    this.titlePlace = this.listPlaces[index].name;
    this.descriptionPlace = this.listPlaces[index].description;
    this.imgsPlace = this.listPlaces[index].images;
    this.changeImg(0);

    if(!this.listPlaces[index].nameEvent) {
      this.nameEventPlace = '';
      this.dayEventPlace = '';
      this.hourEventPlace = '';
    } else {
      this.nameEventPlace = this.listPlaces[index].nameEvent!;
      this.dayEventPlace = this.listPlaces[index].dayEvent!;
      this.hourEventPlace = this.listPlaces[index].hourEvent!;
    }
  }

  changeImg(index: number) {
    this.currentImg = this.imgsPlace[index];
  }

}
