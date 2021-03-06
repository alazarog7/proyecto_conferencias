import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HorariosComponent } from './components/horarios/horarios.component';
import { OradoresComponent } from './components/oradores/oradores.component';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {
    path:'inicio',component:InicioComponent
  },
  {
    path:'horarios',component:HorariosComponent
  },
  {
    path:'recursos',component:ApuntesComponent
  },
  {
    path:'contacto',component:ContactoComponent
  },
  { path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),TranslateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
