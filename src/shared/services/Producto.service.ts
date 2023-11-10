import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { FileI } from '../models/file.interface';
import { AngularFireStorage, AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private baseURL = 'http://localhost:8080/producto/productos';

  private myList:Producto[]=[];
  private myCart = new BehaviorSubject<Producto[]>([]);
  myCart$ =  this.myCart.asObservable();
  private filePath: string;
  private downloadUIrl: Observable<string>;
  private urlImg:any;
constructor(private httpClient : HttpClient ,  private storage: AngularFireStorage) { }


obtenerListaDeProductos():Observable<Producto[]>{
  return this.httpClient.get<Producto[]>(`${this.baseURL} `);
}

// private uploadImage(producto:Producto , image:FileI){
//   this.filePath = `images/${image.name}`;
//   const fileRef = this.storage.ref(this.filePath);
//   const task = this.storage.upload(this.filePath , image);
//   task.snapshotChanges()
//   .pipe(
//     finalize(() =>{
//       fileRef.getDownloadURL().subscribe( urlImage => {
//         this.downloadUIrl = urlImage;
//         this.urlImg = urlImage;
//         console.log('URL', urlImage)
//       })
//     })
//   ).subscribe();
// }


registraProducto(producto: Producto, image: FileI): Observable<Object> {
  this.filePath = `images/${image.name}`;
  const fileRef = this.storage.ref(this.filePath);
  const task = this.storage.upload(this.filePath, image);

  return new Observable(observer => {
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.downloadUIrl = urlImage;
            this.urlImg = urlImage;
            producto.urlImg = this.urlImg; // Establece la URL en el objeto producto dentro de la suscripción.
            this.httpClient.post(`${this.baseURL}`, producto)
              .subscribe(response => {
                observer.next(response);
                observer.complete();
              }, error => {
                observer.error(error);
              });
          })
        })
      )
      .subscribe();
  });
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

// public preAddProduct(prodcuto:Producto , image:FileI): void{
//   this.uploadImage(prodcuto , image);
// }


private saveProducto(producto:Producto){

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
