import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { OradoresComponent } from './components/oradores/oradores.component';
import { ApuntesComponent } from './components/apuntes/apuntes.component';
import { Menu500Component } from './components/menus/menu500/menu500.component';
import { MenuComponent } from './components/menus/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NumberWithCeroPipe } from './pipes/number-with-cero.pipe';
import { ContactoComponent } from './components/contacto/contacto.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegistroComponent,
    HorariosComponent,
    OradoresComponent,
    ApuntesComponent,
    Menu500Component,
    MenuComponent,
    InicioComponent,
    NumberWithCeroPipe,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
