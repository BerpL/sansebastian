import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'catalogos', component: CatalogosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });