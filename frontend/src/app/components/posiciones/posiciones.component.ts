import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
/* Importe desde Equipos */ 
import { EquiposService } from '../../services/equipos.service';
import { Equipos } from '../../models/equipos';
/* Importe desde Posiciones */ 
import { PosicionesService } from '../../services/posiciones.service';
import { Posiciones } from '../../models/posiciones';
/* Importe desde Partidos */ 
import { filter } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  @Input('url') url: String;
  order: string = 'jg';
  reverse: boolean = true;
  valor:string = 'Cachorros';
  selectedEquipo: Equipos;
  equipos: Equipos[];
  posiciones: Posiciones[];
  sortedCollection: any[];
  constructor(public PosicionesService : PosicionesService,
              public EquiposService : EquiposService,
              public EmployeeService: EmployeeService,
              public orderPipe: OrderPipe
              ) {
                this.sortedCollection = orderPipe.transform(this.PosicionesService, 'equipo');
                console.log(this.sortedCollection);
               }
  ngOnInit() {
    this.getPosiciones();
    this.getEmployees();
    
    console.log(this.valor);
    }  
    ngOnChanges(changes: SimpleChanges) {
      this.getPosiciones();
      this.getEmployees();
  }
  getEmployees() {
    this.EmployeeService.getEmployees()
      .subscribe(res => {
        this.EmployeeService.employees = res as Employee[];
        this.EmployeeService.employees = this.EmployeeService.employees.filter(Posicion => Posicion.team === this.valor)
        console.log(this.sortedCollection);

        console.log(this.valor);
      });
  }
    getPosiciones(){
    this.PosicionesService.getPosiciones()
      .subscribe(res =>{
        
        this.PosicionesService.posiciones = res as Posiciones[];
        this.PosicionesService.posiciones = this.PosicionesService.posiciones.filter(Posicion => Posicion.categoria === this.url)


      })
  }
  getPosicion() {
    this.EquiposService.getEquipos()
      .subscribe(res => {
        this.EquiposService.equipos = res as Equipos[];
      });
  }

}
