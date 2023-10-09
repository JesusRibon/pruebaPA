import { Component, OnInit } from '@angular/core';
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
  constructor(private productoServicio : ProductoService ) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
      this.isProdcut =  this.productos?.length > 0;;
    });
  }

}
