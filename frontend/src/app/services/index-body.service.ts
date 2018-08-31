import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partidos } from '../models/partidos';

@Injectable({
  providedIn: 'root'
})
export class IndexBodyService {
  selectedPartido: Partidos;
  partidos: Partidos[];
  
  readonly URL_API = 'https://standing-lijube.herokuapp.com/api/partidos';
  //readonly URL_API = 'http://localhost:3000/api/partidos';


  constructor(private http: HttpClient) {
    this.selectedPartido = new Partidos();
  }

  getPartidos() {
    return this.http.get(this.URL_API);
  }
}
