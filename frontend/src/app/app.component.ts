import { Component, OnInit, ViewChild, Input ,ElementRef} from '@angular/core';
import { PartidosComponent } from "./components/partidos/partidos.component";
import { PosicionesService } from './services/posiciones.service';
import { Posiciones } from './models/posiciones';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('child1') childOne:PartidosComponent;
  constructor(){

  }
  ngOnInit(){
  }
 

}
