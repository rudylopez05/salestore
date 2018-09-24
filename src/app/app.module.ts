import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { ProductosComponent } from './productos/productos.component';
import { IluminacionComponent } from './productos/iluminacion/iluminacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ResidencialesComponent } from './proyectos/residenciales/residenciales.component';
import { IndustriaComponent } from './proyectos/industria/industria.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { MarcasComponent } from './administracion/marcas/marcas.component';
import { LiniasPadreComponent } from './administracion/linias-padre/linias-padre.component';
import { CargarProductosComponent } from './administracion/cargar-productos/cargar-productos.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    IluminacionComponent,
    ProyectosComponent,
    ResidencialesComponent,
    IndustriaComponent,
    AdministracionComponent,
    MarcasComponent,
    LiniasPadreComponent,
    CargarProductosComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
