import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from 'src/app/client-app/services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  map: L.Map = {} as L.Map;

  constructor( private mapService: MapService ) {}

  ngAfterViewInit() {

    this.map = new L.Map('map').setView([19.8391, -98.0301], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);

    this.getMarkers();

  }

  getMarkers() {
    this.mapService.getAllPlaces();
  }

}
