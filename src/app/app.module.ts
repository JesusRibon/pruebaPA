import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioService } from 'src/shared/services/usuario.service';
import { SpinnerModule } from 'src/shared/component/spinner/spinner/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/shared/interceptors/spinner.interceptor';

// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';







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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    AngularFireStorageModule,


    

  ],
  providers: [
    UsuarioService,
    {provide: HTTP_INTERCEPTORS , useClass: SpinnerInterceptor , multi: true},
    {provide: BUCKET, useValue: 'gs://e-tech-ee03f.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
