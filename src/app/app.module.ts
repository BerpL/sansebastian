import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app.routes';

//servicios
import { ProductosService } from './services/productos.service';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FabricantesComponent } from './components/fabricantes/fabricantes.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    FabricantesComponent,
    CatalogosComponent,
    ContactoComponent,
    ProductoComponent,
    BuscadorComponent,
    ProductoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
