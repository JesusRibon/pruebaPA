import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/shared/services/Producto.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  myCart$ = this.productoService.myCart$;
  public payPalConfig?: IPayPalConfig;
  currencyCode = 'USD'; 

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: this.currencyCode,
      clientId: 'AW05Fb1yQFD3Z3pfkuLg0I5gyzY_EHL0dpGF7yEj1zz-rLKq5Kr7Z73v5yoNRbgn7zlfPZHj33hFLxk0', 
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: this.currencyCode,
                value: this.totalCart().toString(),
                breakdown: {
                  item_total: {
                    currency_code: this.currencyCode,
                    value: this.totalCart().toString(),
                  },
                },
              },
              items: this.generatePayPalItems(),
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

  generatePayPalItems(): any[] {
    const items: any[] = [];
    this.myCart$.subscribe((cart) => {
      cart.forEach((producto) => {
        items.push({
          name: producto.nombre,
          quantity: producto.cantidad.toString(),
          category: 'DIGITAL_GOODS',
          unit_amount: {
            currency_code: this.currencyCode,
            value: producto.precio.toString(),
          },
        });
      });
    });
    return items;
  }
  
  totalProdcuto(precio: number, units: number) {
    return precio * units;
  }

  deleteProducto(idProducto: string) {
    this.productoService.deleteProducto(idProducto);
  }

  updateUnits(operation: string, idProducto: string) {
    const producto = this.productoService.findProductoById(idProducto);
    if (producto) {
      if (operation === 'minus' && producto.cantidad > 0) {
        producto.cantidad = producto.cantidad - 1;
      }
      if (operation === 'add') {
        producto.cantidad = producto.cantidad + 1;
      }
      if (producto.cantidad === 0) {
        this.deleteProducto(idProducto);
      }
    }
  }

  totalCart() {
    const result = this.productoService.totalCart();
    return result;
  }
}
