import { Component, OnInit,Pipe,PipeTransform,NgModule,Input,SimpleChanges } from '@angular/core';
import { PartidosService } from '../../services/partidos.service';
import { Partidos } from '../../models/partidos';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
@NgModule({
  declarations: [

  ],
})
export class ResultadosComponent implements OnInit {
  @Input('url') url: String;
  constructor(public PartidosService: PartidosService) { }
  
  ngOnInit() {
    this.getPartidos();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getPartidos();

}
  getPartidos() {
    this.PartidosService.getPartidos()
      .subscribe(res => {
        this.PartidosService.partidos = res as Partidos[];
        this.PartidosService.partidos = this.PartidosService.partidos.filter(Posicion => Posicion.categoria === this.url)
      });
  }
  
}
