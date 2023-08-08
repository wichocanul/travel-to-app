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
  globalMarkers: PlaceData[] = [];

  constructor( private mapService: MapService ) {}

  async ngAfterViewInit() {

    try {

      await this.createMap();
      await this.getMarkers();
      await this.setMarkers();

    } catch (error) {
      console.error('Ocurrió un error', error);
      alert('No se cargó correctamente');
    }

  }

  async createMap() {

    return new Promise<void>((resolve, reject) => {

      this.map = new L.Map('map').setView([19.8391, -98.0301], 15);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy;',
        maxZoom: 20
      }).addTo(this.map);

      resolve(); // Indicamos que la operación ha terminado
    });

  }

  async getMarkers() {

    return new Promise<void>((resolve, reject) => {

      this.mapService.getAllPlaces()
        .subscribe({
          next: (resp) => {
            this.globalMarkers = resp.data;
            resolve(); // Indicamos que la operación ha terminado
          },
          error: (err) => {
            console.log(err);
            reject(err); // Indicamos que ocurrió un error
          }
        });

    });

  }

  async setMarkers() {
    return new Promise<void>((resolve) => {
      this.markersRest.clearLayers();

      this.globalMarkers.forEach((data: PlaceData) => {
        const lat = data.coordinates.lat;
        const lng = data.coordinates.lng;
        const iconResp = L.icon({
          iconUrl: `./assets/imgs/map/${data.type}.png`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32]
        });
        const marker = L.marker([lat, lng], {icon: iconResp});
        let popupContent = '';
        let maxImage: number = 0;
        let setImage = '';

        data.images.length < 4 ? maxImage = data.images.length : maxImage = 4

        for (let i = 0; i < maxImage; i++) {
          setImage += `<div style="width: 100px; height:auto; overflow:hidden;">
                        <img style="width:100%" src="${data.images[i]}">
                      </div>`;
        }

        const introContent = `
          <h3 style="text-align: center; margin-bottom: 10px">${data.name}</h3>
          <p style="text-align: justify; width: 100%;">${data.description}</p>
          <div style="width: 100%; height:70px; display:flex; gap:5px; justify-content: center; align-items: center; overflow:hidden;">
            ${setImage}
          </div>`;

          const eventContent = `
          <div style="margin:10px 0px;">
            <p><span style="font-weight: bold;">Evento:</span> ${data.nameEvent}</p>
            <p><span style="font-weight: bold;">Fecha: </span>${data.dayEvent} <span style="font-weight: bold;">Hora: </span>${data.hourEvent}</p>
          </div>`;

          const footerContent = `
          <div style="display:flex; gap:5px; justify-content: center; align-items: center; margin-bottom:10px; margin-top:10px;">
            <button style="width:auto; padding: 5px 10px; cursor:pointer; background: #009CDE;color:#FFF; border-radius:3px;">Ver lugar</button>
            <button style="width:auto; padding: 5px 10px; cursor:pointer; background: #009CDE;color:#FFF; border-radius:3px;">Trazar ruta</button>
          </div>`;

        data.nameEvent !== '' ? popupContent = introContent + eventContent + footerContent : popupContent = introContent + footerContent;

        marker.bindPopup(popupContent);
        this.markersRest.addLayer(marker);
      });

      this.markersRest.addTo(this.map);
      resolve(); // Indicamos que la operación ha terminado

    })

  }

}
