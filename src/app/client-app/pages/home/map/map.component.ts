import { Component } from '@angular/core';
import * as L from 'leaflet';
import { PlaceData } from 'src/app/client-app/interfaces/places.interface';
import { MapService } from 'src/app/client-app/services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  map: L.Map = {} as L.Map;
  markersRest: L.LayerGroup = L.layerGroup();

  constructor( private mapService: MapService ) {}

  ngAfterViewInit() {

    this.map = new L.Map('map').setView([19.8391, -98.0301], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;',
      maxZoom: 20
    }).addTo(this.map);

    this.getMarkers();

  }

  getMarkers() {
    this.mapService.getAllPlaces()
      .subscribe({
        next: (resp) => {
          this.setMarkers(resp);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  setMarkers(resp:PlaceData[]) {
    this.markersRest.clearLayers();

    resp.forEach((data: any) => {
      const lat = parseFloat(data.coordinates.lat);
      const lng = parseFloat(data.coordinates.lng);
      const icon = L.icon({
        iconUrl: `./assets/imgs/map/${data.type}.png`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
      const marker = L.marker([lat, lng], {icon});
      const popupContent = `
        <h3 style="text-align: center;">${data.name}</h3>
        <p style="text-align: justify;">${data.description}</p>
        <p>Evento: ${data.nameEvent} - Fecha: ${data.dayEvent} - Hora: ${data.hourEvent}</p>
      `;

      marker.bindPopup(popupContent);
      this.markersRest.addLayer(marker);
    });

    this.markersRest.addTo(this.map);
  }

}
