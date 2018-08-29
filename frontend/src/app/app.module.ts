import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import {app_routing} from "./app.routes";

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HeaderComponent } from './components/header/header.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { IndexComponent } from './components/index/index.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { FilterPipe } from './components/resultados/filter.pipe';
import { VjugadoresComponent } from './components/vjugadores/vjugadores.component';
import { OrderModule } from 'ngx-order-pipe';
import { GraficasComponent } from './components/graficas/graficas.component';
import { UltimospComponent } from './components/ultimosp/ultimosp.component';
import { PreiniComponent } from './components/preini/preini.component';
import { IniComponent } from './components/ini/ini.component';
import { PreinfComponent } from './components/preinf/preinf.component';
import { InfComponent } from './components/inf/inf.component';
import { PrejunComponent } from './components/prejun/prejun.component';
import { JunComponent } from './components/jun/jun.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { ContComponent } from './components/cont/cont.component'; // <- import OrderModule
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    EquiposComponent,
    PartidosComponent,
    PosicionesComponent,
    IndexComponent,
    ResultadosComponent,
    FilterPipe,
    VjugadoresComponent,
    GraficasComponent,
    UltimospComponent,
    PreiniComponent,
    IniComponent,
    PreinfComponent,
    InfComponent,
    PrejunComponent,
    JunComponent,
    MenuComponent,
    TrabajadoresComponent,
    ContComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    app_routing,
    OrderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
