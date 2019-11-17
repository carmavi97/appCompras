import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { GuardService } from './servicios/guard.service';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';


const routes: Routes = [
  { path: '', component:InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService]},
  { path: 'addprovee', component: AddproveeComponent, canActivate: [GuardService]},
  { path: 'addpres', component: AddpresComponent, canActivate: [GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService]},
  { path: 'editpres/:id', component: EditpresComponent, canActivate: [GuardService]},
  { path: 'registro', component: RegistroComponent },
  { path:'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
