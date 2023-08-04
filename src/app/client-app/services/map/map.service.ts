import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlaceData } from '../../interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private baseUrl: string = environment.urlTravelTo;

  constructor( private http: HttpClient ) { }

  getAllPlaces(): Observable<PlaceData[]> {
    const url = `${this.baseUrl}/places`;

    return this.http.get<PlaceData[]>( url );
  }
}
