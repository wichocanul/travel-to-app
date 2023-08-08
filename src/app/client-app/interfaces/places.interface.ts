export interface PlaceData {
  id: number;
  name: string;
  description: string;
  coordinates: CoordinatesData;
  images: string[];
  type: string;
  nameEvent?: string;
  dayEvent?:string;
  hourEvent?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CoordinatesData {
  lat: number;
  lng: number;
}

export interface PlaceResponse {
  message: string;
  data: PlaceData[];
}
