import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FilterPipe } from 'src/shared/pipes/filter.pipe';
import { FilterProdcutoPipe } from 'src/shared/pipes/filterProdcuto.pipe';
import { ActualizarProductoComponent } from './admin/actualizar-producto/actualizar-producto.component';
import { InicioAdminComponent } from './admin/inicio-admin/inicio-admin.component';
import { ListaProductosComponent } from './admin/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './admin/lista-usuarios/lista-usuarios.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { RegistrarProdcutoComponent } from './admin/registrar-prodcuto/registrar-prodcuto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoEtechComponent } from './contacto-etech/contacto-etech.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { NavbarComponent } from 'src/shared/component/navbar/navbar.component';
import { MaterialModule } from 'src/shared/material/material.module';
import { ConsultarProductoComponent } from './consultar-producto/consultar-producto.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { NgxPayPalModule } from 'ngx-paypal';
const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'registro-usuario',
    component: RegistroUsuarioComponent,
  },
  {
    path: 'login-usuario',
    component: LoginUsuarioComponent,
  },
  {
    path: 'contacto-etech',
    component: ContactoEtechComponent,
  },
  {
    path: 'inicio-admin',
    component: InicioAdminComponent,
  },
  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
  },
  {
    path: 'lista-productos',
    component: ListaProductosComponent,
  },
  {
    path: 'registrar-producto',
    component: RegistrarProdcutoComponent,
  },
  {
    path: 'productos',
    component: ProductoComponent,
  },
  {
    path: 'actualizar-producto',
    component: ActualizarProductoComponent,
  },
  {
    path: ':idProducto/consultar',
    component: ConsultarProductoComponent
  }
];

@NgModule({
  declarations: [
    InicioComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    ContactoEtechComponent,
    InicioAdminComponent,
    NavbarComponent,
    NavbarAdminComponent,
    ListaUsuariosComponent,
    FilterPipe,
    ListaProductosComponent,
    RegistrarProdcutoComponent,
    ProductoComponent,
    CarritoComponent,
    FilterProdcutoPipe,
    ActualizarProductoComponent,
    ConsultarProductoComponent,
    ChatbotComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule , MaterialModule , 
    ReactiveFormsModule,
    NgxPayPalModule],
})
export class PaModule {}
