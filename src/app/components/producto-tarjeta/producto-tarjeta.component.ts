import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  @Input() producto:any = {};
  @Input() index:number;

  @Output() productoSeleccionado:EventEmitter<number>

  constructor( private router:Router) {
    this.productoSeleccionado = new EventEmitter();
   }
  ngOnInit(): void {
  }
  verProducto(){
    // console.log(this.index);
    this.router.navigate(['/producto',this.index]);
    // this.productoSeleccionado.emit(this.index);
  }
}
