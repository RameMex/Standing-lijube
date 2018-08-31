import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajadores } from '../models/trabajadores';
@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {
  selectedTrabajador: Trabajadores;
  trabajadores: Trabajadores[];
  
  readonly URL_API = 'https://standing-lijub.herokuapp.com/api/trabajadores';
  //readonly URL_API = 'http://localhost:3000/api/trabajadores';

  constructor(private http: HttpClient) {
    this.selectedTrabajador = new Trabajadores();
  }

  postTrabajador(trabajador: Trabajadores) {
    return this.http.post(this.URL_API, trabajador);
  }

  getTrabajadores() {
    return this.http.get(this.URL_API);
  }

  putTrabajador(trabajadores: Trabajadores) {
    return this.http.put(this.URL_API + `/${trabajadores._id}`, trabajadores);
  }

  deletetrabajador(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
    
}
