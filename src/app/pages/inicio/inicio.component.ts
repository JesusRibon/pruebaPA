import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/shared/models/Producto';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  implements OnInit{
  productos: Producto[];
  isProdcut = false;
  constructor(private productoServicio : ProductoService ,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
      this.isProdcut =  this.productos?.length > 0;;
    });
  }

  redirectConsult(idProducto:String){
    this.router.navigate([idProducto, 'consultar'], {
      relativeTo: this.activatedRoute,
    });
  }

}
