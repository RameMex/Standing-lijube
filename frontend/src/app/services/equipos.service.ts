import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Equipos } from '../models/equipos';
import { Posiciones} from '../models/posiciones'
@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  selectedEquipo: Equipos;
  equipos: Equipos[];
  posiciones: Posiciones[];
  
  readonly URL_API = 'https://standing-lijube.herokuapp.com/api/equipos';
  //readonly URL_API = 'http://localhost:3000/api/equipos';

  constructor(private http: HttpClient) {
    this.selectedEquipo = new Equipos();
  }

  postEquipo(equipo: Equipos) {
    return this.http.post(this.URL_API, equipo);
  }

  getEquipos() {
    return this.http.get(this.URL_API);
  }

  putEquipo(equipo: Equipos) {
    return this.http.put(this.URL_API + `/${equipo._id}`, equipo);
  }

  deleteEquipo(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
