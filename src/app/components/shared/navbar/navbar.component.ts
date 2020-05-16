import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_navbar();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
    init_navbar()
  }

  buscarProducto( termino:string ){
    // console.log(termino);
    this.router.navigate(['/buscar',termino])
  }

}
