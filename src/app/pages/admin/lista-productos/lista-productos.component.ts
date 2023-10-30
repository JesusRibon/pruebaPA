import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/shared/models/Producto';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[];

  constructor(private productoServicio : ProductoService ,  private router:Router , private route:ActivatedRoute) { }
  filterProducto=''

  ngOnInit() {
    this.obtenerProductos();
  }

  
  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }


  eliminarProducto(idProducto:string){
    if(confirm(" ¿Estas seguro de eliminar al Usuuario  ?")){
      this.productoServicio.eliminarProducto(idProducto).subscribe(dato =>{
        this.obtenerProductos();
      })
    }
  }


  actualizarProducto(producto:Producto){
    this.router.navigate(['/actualizar-producto',producto]);
  }

}
