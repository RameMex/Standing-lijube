import { Component, OnInit } from '@angular/core';
import { PosicionesService } from '../../services/posiciones.service';
import { Posiciones } from '../../models/posiciones';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Url:string = 'Pre-Iniciacion';
  constructor(public PosicionesService : PosicionesService) { }

  ngOnInit() {
  }

}
