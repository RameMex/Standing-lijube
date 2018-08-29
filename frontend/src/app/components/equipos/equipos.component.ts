import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquiposService } from '../../services/equipos.service';
import { Equipos } from '../../models/equipos';
import { PosicionesService } from '../../services/posiciones.service';
import { Posiciones } from '../../models/posiciones';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import {PosicionesComponent} from '../posiciones/posiciones.component';
declare var M: any;
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css'],
  providers: [ EquiposService ]
})
export class EquiposComponent implements OnInit {
 

  constructor(public EquiposService: EquiposService,
              public PosicionesService: PosicionesService) { }

  ngOnInit() {
    this.getEquipos();
  }
  getproposals() {
  }
  addEquipo(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.EquiposService.putEquipo(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEquipos();
          M.toast({html: 'Equipo Modificado'});
        });
    } else {
     // or whatever
      this.EquiposService.postEquipo(form.value)
      .subscribe(res => {
        this.EquiposService.selectedEquipo = new Equipos();
        this.getEquipos();
        M.toast({html: 'Equipo Creado'}); 
      });
    }
    
  }
  getPosiciones(){
    this.PosicionesService.getPosiciones()
      .subscribe(res => {
        this.PosicionesService.posiciones = res as Posiciones[];
      });
  }
  getEquipos() {
    this.EquiposService.getEquipos()  
      .subscribe(res => {
        this.EquiposService.equipos = res as Equipos[];
      });
  }

  editEquipo(equipos: Equipos) {
    this.EquiposService.selectedEquipo = equipos;
  }

  deleteEquipo(_id: string, form: NgForm) {
    if(confirm('¿Seguro de eliminarlo?')) {
      this.EquiposService.deleteEquipo(_id)
        .subscribe(res => {
          this.getEquipos();
          this.resetForm(form);
          M.toast({html: 'Equipo Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.EquiposService.selectedEquipo = new Equipos();
    }
  }

}

