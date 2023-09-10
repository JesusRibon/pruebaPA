import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:8080/usuario/usuarios';

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeUsuarios():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl} `);
  }


  registrarUsuario(usuario:Usuario):Observable<Object>{
    console.info(usuario);
    return this.httpClient.post(`${this.baseUrl} `,usuario);
  }

  eliminarUsuario(idUsuario:string):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${idUsuario}`);
  }
}
