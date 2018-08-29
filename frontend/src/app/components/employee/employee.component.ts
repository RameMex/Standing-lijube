import { Component, OnInit,SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { EquiposService } from '../../services/equipos.service';
import { Equipos } from '../../models/equipos';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeComponent implements OnInit {
  categoria:string = 'Pre-Iniciacion';
  array =[
    {categoria:'Pre-Iniciacion'},
    {categoria:'Iniciacion'}
  ]
  constructor(public employeeService: EmployeeService,
              public EquiposService: EquiposService) { }

  ngOnInit() {
    this.getEmployees();
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
  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Jugador Modificado'});
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({html: 'Jugador Creado'});
      });
    }
    
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if(confirm('¿Seguro de eliminarlo?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Jugador Eliminado'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
