import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];

  constructor( private _productosService:ProductosService,
               private router:Router
    ) { }

  ngOnInit(): void {
    this.productos = this._productosService.getProductos();
  }

  verProducto(idx:number){
    this.router.navigate(['/producto',idx]);
  }

}
