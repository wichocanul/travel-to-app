import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaceData, PlaceResponse } from '../../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private baseUrl: string = environment.urlTravelTo;

  constructor( private http: HttpClient ) { }

  getAllPlaces(): Observable<PlaceResponse> {
    const url = `${this.baseUrl}/places`;

    return this.http.get<PlaceResponse>( url );
  }

  kindPlaces(kindPlace: string):Observable<PlaceData[]> {
    if(kindPlace == 'eventos') { kindPlace = 'evento'}
    if(kindPlace == 'restaurantes') { kindPlace = 'restaurante'}
    const url = `${this.baseUrl}/places?type=${kindPlace}`;

    return this.http.get<PlaceData[]>(url);
  }
}
