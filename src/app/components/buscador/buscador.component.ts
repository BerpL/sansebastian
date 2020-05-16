import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  productos:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _productosService:ProductosService,
               private router:Router
    ) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      // console.log(params['termino']);
      this.termino = params['termino'];
      this.productos= this._productosService.buscarProductos(params['termino']);
    })
  }

  verProducto(idx:number){
    this.router.navigate(['/producto',idx]);
  }

}
