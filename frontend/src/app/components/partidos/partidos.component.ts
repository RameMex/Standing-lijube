import { Component, OnInit , Output,SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PartidosService } from '../../services/partidos.service';
import { Partidos } from '../../models/partidos';
/* Importe desde Posiciones */ 
import { PosicionesService } from '../../services/posiciones.service';
import { Posiciones } from '../../models/posiciones';
/* Importe equipos */
import { EquiposService } from '../../services/equipos.service';
import { Equipos } from '../../models/equipos';


declare var M: any;
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
})
export class PartidosComponent implements OnInit {
  categoria:string = 'Pre-Iniciacion';
  constructor(public PartidosService: PartidosService,
              public EquiposService: EquiposService) { }
    Equipos:Equipos[];
  ngOnInit() {
    this.getPartidos();
    this.getEquipos('');
  }
  ngOnChanges(changes:SimpleChange){
    this.getEquipos('');
  }
  addPosicion(form?: NgForm) {
    try {
      if(form.value.resultado1 > form.value.resultado2){
        var resultado = 0;
        
      }
      if(form.value.resultado1 < form.value.resultado2){
        console.log('Equipo 2 gano');
      }
    } catch (error) {
      
    }
  }
  addPartido(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.PartidosService.putPartido(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPartidos();
          M.toast({html: 'Equipo Modificado'});
        });
    } else {
      this.PartidosService.postPartido(form.value)
      .subscribe(res => {
        this.getPartidos();
        M.toast({html: 'Equipo Creado'});
      });
    }
    
  }

  getPartidos() {
    this.PartidosService.getPartidos()
      .subscribe(res => {
        this.PartidosService.partidos = res as Partidos[];
      });
  }
  getEquipos(categoria) {
    this.EquiposService.getEquipos()  
      .subscribe(res => {
        this.EquiposService.equipos = res as Equipos[];
        this.EquiposService.equipos = this.EquiposService.equipos.filter(Posicion => Posicion.seccion === categoria)
        this.categoria = categoria;

      });
  }
  editPartido(partidos: Partidos) {
    this.PartidosService.selectedPartido = partidos;
  }

  deletePartido(_id: string, form: NgForm) {
    if(confirm('¿Seguro de eliminarlo?')) {
      this.PartidosService.deletePartido(_id)
        .subscribe(res => {
          this.getPartidos();
          this.resetForm(form);
          M.toast({html: 'Equipo Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.PartidosService.selectedPartido = new Partidos();
    }
  }

}

