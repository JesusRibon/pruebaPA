import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProdcuto'
})
export class FilterProdcutoPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultado=[];
    for(const producto of value) {
      if(producto.idProducto.toLowerCase().indexOf(arg)>-1 || producto.nombre.toLowerCase().indexOf(arg)>-1){
        resultado.push(producto);
      };
    
    };
    


    return resultado;

    
  }

}
