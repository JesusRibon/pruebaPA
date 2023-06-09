import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ContactoEtechComponent } from './contacto-etech/contacto-etech.component';
import { FormsModule } from '@angular/forms';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { ListaUsuariosComponent } from './admin/lista-usuarios/lista-usuarios.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { ListaProductosComponent } from './admin/lista-productos/lista-productos.component';
import { RegistrarProdcutoComponent } from './admin/registrar-prodcuto/registrar-prodcuto.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FilterProdcutoPipe } from '../pipes/filterProdcuto.pipe';
import { ActualizarProductoComponent } from './admin/actualizar-producto/actualizar-producto.component';


const routes: Routes = [

  {
    path:'',
    component: InicioComponent
  },
  {
    path:'registro-usuario',
    component: RegistroUsuarioComponent
  },
  {
    path:'login-usuario',
    component: LoginUsuarioComponent
  },
  {
    path:'contacto-etech',
    component: ContactoEtechComponent
  },
  {
    path:'inicio-admin',
    component: InicioAdminComponent
  },
  {
    path:'lista-usuarios',
    component: ListaUsuariosComponent
  },
  {
    path:'lista-productos',
    component: ListaProductosComponent
  },
  {
    path: 'registrar-producto',
    component: RegistrarProdcutoComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'actualizar-producto',
    component: ActualizarProductoComponent
  }

];


@NgModule({
  declarations: [InicioComponent, RegistroUsuarioComponent, LoginUsuarioComponent, ContactoEtechComponent , InicioAdminComponent , NavbarComponent , NavbarAdminComponent ,ListaUsuariosComponent , FilterPipe , ListaProductosComponent , RegistrarProdcutoComponent , ProductoComponent , CarritoComponent ,FilterProdcutoPipe , ActualizarProductoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PaModule { }
