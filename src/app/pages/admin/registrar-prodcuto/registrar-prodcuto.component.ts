import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/shared/models/Producto';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-registrar-prodcuto',
  templateUrl: './registrar-prodcuto.component.html',
  styleUrls: ['./registrar-prodcuto.component.css']
})
export class RegistrarProdcutoComponent implements OnInit {
  producto: Producto = new Producto();
  private image:any;
  constructor(private productoServicio : ProductoService , private router:Router) { }

  ngOnInit() {
  }

  handleImage(event:any):void{
    this.image = event.target.files[0];
  }
 
  registrarProducto(){
    this.productoServicio.registraProducto(this.producto , this.image).subscribe(dato =>{
      this.irAlaListaProductos();
    }, error => console.log('este es error',error))
  }

  exit(){
    this.router.navigate(['/lista-productos'])
  }
  

  irAlaListaProductos(){
    this.router.navigate(['/lista-productos']);
  }


  onSubmit(){
    this.registrarProducto();
  }

 
}
