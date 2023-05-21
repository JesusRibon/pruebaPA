import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/Producto.service';

@Component({
  selector: 'app-registrar-prodcuto',
  templateUrl: './registrar-prodcuto.component.html',
  styleUrls: ['./registrar-prodcuto.component.css']
})
export class RegistrarProdcutoComponent implements OnInit {
  producto: Producto = new Producto();

  constructor(private productoServicio : ProductoService , private router:Router) { }

  ngOnInit() {
  }

  registrarProducto(){
    this.productoServicio.registraProducto(this.producto).subscribe(dato =>{
      console.log(dato);
      this.irAlaListaProductos();
    }, error => console.log(error))
  }

  irAlaListaProductos(){
    this.router.navigate(['/lista-productos']);
  }


  onSubmit(){
    this.registrarProducto();
  }
}
