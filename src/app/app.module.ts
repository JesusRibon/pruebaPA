import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioService } from 'src/shared/services/usuario.service';
import { SpinnerModule } from 'src/shared/component/spinner/spinner/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/shared/interceptors/spinner.interceptor';
import { MaterialModule } from 'src/shared/material/material.module';







@NgModule({   
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpinnerModule,

    

  ],
  providers: [
    UsuarioService,
    {provide: HTTP_INTERCEPTORS , useClass: SpinnerInterceptor , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
