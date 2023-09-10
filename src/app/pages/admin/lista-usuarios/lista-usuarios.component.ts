import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/shared/models/usuario';
import { UsuarioService } from 'src/shared/services/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioService : UsuarioService) { }
  filterUser=''
  
  ngOnInit() {
    this.obternerUsuarios();
  }







  eliminarUsuario(idUsuario:string){
    if(confirm(" ¿Estas seguro de eliminar al Usuuario  ?")){
      this.usuarioService.eliminarUsuario(idUsuario).subscribe(dato =>{
        console.log(dato);
        this.obternerUsuarios();
      })
    }
  }

  private obternerUsuarios(){
    this.usuarioService.obtenerListaDeUsuarios().subscribe(dato =>{
      this.usuarios = dato;
    })
  }

}
