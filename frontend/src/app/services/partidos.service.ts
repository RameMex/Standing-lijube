import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipos } from '../models/equipos';
import { Partidos } from '../models/partidos';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  selectedPartido: Partidos;
  partidos: Partidos[];
  selectedEquipo: Equipos;
  equipos: Equipos[];

  
  readonly URL_API = 'https://standing-lijub.herokuapp.com/api/partidos';
  //readonly URL_API = 'http://localhost:3000/api/partidos';


  constructor(private http: HttpClient) {
    this.selectedPartido = new Partidos();
  }

  postPartido(partido: Partidos) {
    return this.http.post(this.URL_API, partido);
  }

  getPartidos() {
    return this.http.get(this.URL_API);
  }

  putPartido(partido: Partidos) {
    return this.http.put(this.URL_API + `/${partido._id}`, partido);
  }

  deletePartido(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
