import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {PacienteComponent} from './paciente/paciente.component';
import {DoctorComponent} from './doctor/doctor.component';
import {LoginDoctorComponent} from './doctor/login-doctor/login-doctor.component';
import {LoginPacienteComponent} from './paciente/login-paciente/login-paciente.component';
import {InterfazDocComponent} from './doctor/interfaz-doc/interfaz-doc.component';
import {InterfazPaciComponent} from './paciente/interfaz-paci/interfaz-paci.component';
import {ProxiVisitaComponent} from './paciente/proxi-visita/proxi-visita.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'app-paciente', component:PacienteComponent},
  {path:'app-doctor', component:DoctorComponent},
  {path:'app-login-doctor', component:LoginDoctorComponent},
  {path:'app-login-paciente', component:LoginPacienteComponent},
  {path:'app-interfaz-doc', component:InterfazDocComponent},
  {path:'app-interfaz-paci', component:InterfazPaciComponent},
  {path:'app-proxi-visita', component:ProxiVisitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
