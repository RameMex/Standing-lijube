import { Component, OnInit,SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrabajadoresService } from '../../services/trabajadores.service';
import { Trabajadores } from '../../models/trabajadores';
import { EquiposService } from '../../services/equipos.service';
import { Equipos } from '../../models/equipos';

declare var M: any;
@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css'],
  providers: [ TrabajadoresService ]
})
export class TrabajadoresComponent implements OnInit {

  categoria:string = 'Pre-Iniciacion';
  constructor(public TrabajadoresService: TrabajadoresService,
              public EquiposService: EquiposService) { }

  ngOnInit() {
    this.getTrabajadores();
    this.getEquipos('');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getEquipos('');
}
camb(categoria){
  console.log(categoria);
  alert(categoria)
}
  getEquipos(categoria) {
    this.EquiposService.getEquipos()  
      .subscribe(res => {
        this.EquiposService.equipos = res as Equipos[];
        this.EquiposService.equipos = this.EquiposService.equipos.filter(Posicion => Posicion.seccion === categoria)
        this.categoria = categoria;

      });
  }
  addTrabajadores(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.TrabajadoresService.putTrabajador(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getTrabajadores();
          M.toast({html: 'Jugador Modificado'});
        });
    } else {
      this.TrabajadoresService.postTrabajador(form.value)
      .subscribe(res => {
        this.getTrabajadores();
        this.resetForm(form);
        M.toast({html: 'Jugador Creado'});
      });
    }
    
  }

  getTrabajadores() {
    this.TrabajadoresService.getTrabajadores()
      .subscribe(res => {
        this.TrabajadoresService.trabajadores = res as Trabajadores[];
      });
  }

  editTrabajador(Trabajadores: Trabajadores) {
    this.TrabajadoresService.selectedTrabajador = Trabajadores;
  }

  deleteTrabajador(_id: string, form: NgForm) {
    if(confirm('¿Seguro de eliminarlo?')) {
      this.TrabajadoresService.deletetrabajador(_id)
        .subscribe(res => {
          this.getTrabajadores();
          this.resetForm(form);
          M.toast({html: 'Jugador Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.TrabajadoresService.selectedTrabajador = new Trabajadores();
    }
  }


}
