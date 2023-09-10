import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/shared/models/usuario';
import { UsuarioService } from 'src/shared/services/usuario.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{
  usuario: Usuario = new Usuario();
  
  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
  
  }

  guardarUsuario(){
    this.usuarioService.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
    },error => console.log(error));
    }

    limpiatrCampos(){
      this.usuario.idUsuario = '';
      this.usuario.nombre = '';
      this.usuario.apellido = '';
      this.usuario.direccion = '';
      this.usuario.telefono = '';
      this.usuario.email = '';
      this.usuario.password = '';
    }


    onSubmit(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.guardarUsuario();
      this.limpiatrCampos();
    }
  }


  


