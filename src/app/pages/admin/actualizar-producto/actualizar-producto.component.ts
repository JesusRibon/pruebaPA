import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from 'src/shared/models/Producto';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  idProducto: string;
  producto: Producto = new Producto();
  constructor(private productoServicio : ProductoService ,  private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
    this.idProducto =  this.route.snapshot.params['idProducto'];
    this.productoServicio.obtenerProdcuto(this.idProducto).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
  }
  
  irAlaListaDeProducto(){
    this.router.navigate(['/lista-productos']);
  }

  onSubmit(){
    this.productoServicio.actualizarProducto(this.producto).subscribe(dato => {
      this.irAlaListaDeProducto();
    })
  }

}
