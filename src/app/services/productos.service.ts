import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
    private productos:Producto[] = [
        {
          id:0,
          producto: "desarmador",
          clase:"herramienta manual",
          marca:"stanley",
          tipo:"piloto",
          medida:"7 pulgadas",
          img:"assets/img/product.png",
          precio:"10.5"
        },
        {
          id:1,
          producto: "alicate",
          clase:"herramienta manual",
          marca:"stanley",
          tipo:"universal y dieléctrico",
          medida:"7 pulgadas",
          img:"assets/img/product.png",
          precio:"15.5"
        }
      ];

    constructor(){
    }

    getProductos(){
        return this.productos;
    }

    getProducto(idx:string){
      return this.productos[idx];
    }

    buscarProductos( termino:string ):Producto[]{
      let productosArr:Producto[] = [];
      termino = termino.toLowerCase();
      for( let producto of this.productos){
        let nombre = producto.producto.toLowerCase();
        let clase = producto.clase.toLowerCase();
        let marca = producto.marca.toLowerCase();
        let tipo = producto.tipo.toLowerCase();
        let medida = producto.medida.toLowerCase();
        if(nombre.indexOf(termino)>=0 || clase.indexOf(termino)>=0
           || marca.indexOf(termino)>=0 || tipo.indexOf(termino)>=0
           || medida.indexOf(termino)>=0)
        {
          productosArr.push(producto)
        }
      }
      return productosArr;
    }
}

export interface Producto{
    id:number;
    producto: string;
    clase: string;
    marca: string;
    tipo:string;
    medida:string;
    img: string;
    precio: string;        
}