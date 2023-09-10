import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
   myCart$ = this.productoService.myCart$

  constructor(private productoService:ProductoService) { }

  ngOnInit() {
  }

  totalProdcuto(precio:number , units:number){
    return precio * units;
  }

  deleteProducto(idProducto:string){
    this.productoService.deleteProducto(idProducto);
  }

  updateUnits(operation:string , idProducto:string){
    const producto = this.productoService.findProductoById(idProducto);
    if(producto){
      if(operation === 'minus' && producto.cantidad > 0){
        producto.cantidad = producto.cantidad -1;
      }
      if(operation === 'add' ){
        producto.cantidad = producto.cantidad +1;
      }
      if(producto.cantidad === 0){
        this.deleteProducto(idProducto);
      }
        
    }
  }

  totalCart(){
    const result  = this.productoService.totalCart();
    return result;
  }

}
