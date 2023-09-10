import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = 'http://localhost:8080/producto/productos';

  private myList:Producto[]=[];
  private myCart = new BehaviorSubject<Producto[]>([]);
  myCart$ =  this.myCart.asObservable();

constructor(private httpClient : HttpClient) { }


obtenerListaDeProductos():Observable<Producto[]>{
  return this.httpClient.get<Producto[]>(`${this.baseURL} `);
}

registraProducto(producto:Producto):Observable<Object>{
  return this.httpClient.post(`${this.baseURL} `,producto);
}

obtenerProdcuto(idProducto:string):Observable<Producto>{
  return this.httpClient.get<Producto>(`${this.baseURL}/${idProducto}`);
}

eliminarProducto(idProducto:string):Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${idProducto}`);
}

actualizarProducto(producto:Producto):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${producto.idProducto}`,producto);
}





//carrito de compra

addProducto(producto:Producto){
  if(this.myList.length === 0){
    producto.cantidad = 1 ;
    this.myList.push(producto)
    this.myCart.next(this.myList);
  }else{
    const productoMod = this.myList.find((element)=>{
     return element.idProducto === producto.idProducto
    })
    if(productoMod){
      productoMod.cantidad = productoMod.cantidad + 1 ;
      this.myCart.next(this.myList);
    }else{
      producto.cantidad = 1;
      this.myList.push(producto);
      this.myCart.next(this.myList);
    }
  } 
}
  deleteProducto(idProducto:string) {
    this.myList = this.myList.filter((producto)=>{
      return producto.idProducto != idProducto
    })
    this.myCart.next(this.myList);
  }

  findProductoById(idProducto:string) {
    return this.myList.find((element)=>{
      return element.idProducto === idProducto;
    })
  }

  totalCart(){
    const total = this.myList.reduce(function (acc , producto) {
      return acc + (producto.cantidad  * producto.precio);
    },0)
    return total
  }

}
