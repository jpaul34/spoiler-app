import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculaBannerComponent } from './pelicula/pelicula-banner/pelicula-banner.component';
import { BuscadorComponent } from './buscador/buscador/buscador.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal/menu-principal.component';
import { MenuSecundarioComponent } from './menu-secundario/menu-secundario/menu-secundario.component';
import { TituloComponent } from './titulo/titulo/titulo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    BuscadorComponent,
    MenuPrincipalComponent,
    MenuSecundarioComponent,
    TituloComponent

  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


