import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posiciones } from '../models/posiciones';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PosicionesService {
  selectedPosicion: Posiciones;
  posiciones: Posiciones[];
  
  readonly URL_API = 'https://standing-lijub.herokuapp.com/api/posiciones';
  //readonly URL_API = 'http://localhost:3000/api/posiciones';


  
  constructor(private http: HttpClient) {
    this.selectedPosicion = new Posiciones();
  }

  postPosicion(employee: Posiciones) {
    return this.http.post(this.URL_API, employee);
  }

  getPosiciones() {
    return this.http.get(this.URL_API);

  }

  putPosicion(employee: Posiciones) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  deletePosicion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
