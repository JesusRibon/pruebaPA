import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  form!: FormGroup;

  constructor(private usuarioService: UsuarioService, 
    private fb: FormBuilder) {}


    ngOnInit(): void {
      this.form = this.fb.group({
        idUsuario: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
    }
    
    guardarUsuario() {
      this.usuarioService.registrarUsuario(this.form.value).subscribe(
        dato => {
          console.log(dato);
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuarios Registrado exitosamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.limpiatrCampos();
        },
        error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.',
          });
        }
      );
    }

    limpiatrCampos(){
      this.form.reset();
    }


    onSubmit() {
      if (this.form.valid) {
        this.guardarUsuario();
      }
    }
  }


  


