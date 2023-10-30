import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/shared/models/Producto';
import { ProductoService } from 'src/shared/services/Producto.service';

@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent implements OnInit{
  dataProduct!: any;
  idProducto = this.activatedRoute.snapshot.paramMap.get('idProducto');
  listProduct : Producto[];
  constructor(private serviceProduct: ProductoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,){

  }
  

  ngOnInit(): void {
    if(this.idProducto){
      this.serviceProduct.obtenerProdcuto(this.idProducto).subscribe(data =>{
        console.log(data)
        this.dataProduct = data;
      })
    }

    this.serviceProduct.obtenerListaDeProductos().subscribe(data =>{
      this.listProduct = data;
      console.log('lista',this.listProduct)
    })
  }
  
  addToCart(producto:Producto){
    return this.serviceProduct.addProducto(producto);
  }
}

