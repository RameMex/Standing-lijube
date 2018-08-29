import {RouterModule,Routes} from '@angular/router';
import {EmployeeComponent} from './components/employee/employee.component';
import {EquiposComponent} from './components/equipos/equipos.component';
import {PartidosComponent} from './components/partidos/partidos.component';
import {IndexComponent} from './components/index/index.component';
import {AppComponent} from './app.component';
import { InfComponent } from './components/inf/inf.component';
import { PreiniComponent } from './components/preini/preini.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { ContComponent } from './components/cont/cont.component';


const app_routes: Routes = [
    {path:'Iniciacion',redirectTo:'',pathMatch:'full'},
    {path:'Pre-Iniciacion',redirectTo:'',pathMatch:'full'},
    {path:'Pre-Infantil',redirectTo:'',pathMatch:'full'},
    {path:'Infantil',redirectTo:'',pathMatch:'full'},
    {path:'Pre-Junior',redirectTo:'',pathMatch:'full'},
    {path:'Junior',redirectTo:'',pathMatch:'full'},
    {path:'',component:IndexComponent},
    {path:'cont/menu/16180339887/jugadores',component:EmployeeComponent},
    {path:'cont/menu/16180339887/equipos', component:EquiposComponent},
    {path:'cont/menu/16180339887/partidos',component:PartidosComponent},
    {path:'cont/menu/16180339887/trabajadores',component:TrabajadoresComponent},
    {path:'cont', component:ContComponent},
    {path:'cont/menu',component:MenuComponent}
];

export const app_routing = RouterModule.forRoot(app_routes)