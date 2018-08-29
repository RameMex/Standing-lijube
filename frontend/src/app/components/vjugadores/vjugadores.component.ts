import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { TrabajadoresService } from '../../services/trabajadores.service';
import { Trabajadores } from '../../models/trabajadores';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
@Component({
  selector: 'app-vjugadores',
  templateUrl: './vjugadores.component.html',
  styleUrls: ['./vjugadores.component.css']
})
export class VjugadoresComponent implements OnInit {
  @Input('valor') valor: String;
  @Input('url') url: String;


  constructor(public employeeService:EmployeeService,
              public TrabajadoresService:TrabajadoresService) { }

  ngOnInit() {
    this.getEmployees();
    this.getTrabajadores();

  }
  ngOnChanges(changes: SimpleChanges) {
    this.getEmployees();
    this.getTrabajadores();

}
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        this.employeeService.employees = this.employeeService.employees.filter(Posicion => Posicion.categoria === this.url)
        console.log(this.employeeService.employees)
        this.employeeService.employees = this.employeeService.employees.filter(Posicion => Posicion.team === this.valor)
        console.log(this.employeeService.employees)

      });
  }
  getTrabajadores() {
    this.TrabajadoresService.getTrabajadores()
      .subscribe(res => {
        this.TrabajadoresService.trabajadores = res as Trabajadores[];
        this.TrabajadoresService.trabajadores = this.TrabajadoresService.trabajadores.filter(Posicion => Posicion.categoria === this.url)
        this.TrabajadoresService.trabajadores = this.TrabajadoresService.trabajadores.filter(Posicion => Posicion.equipo === this.valor);
      });
  }


}
