import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './administracion/administracion.component';
import { ProductosComponent } from './productos/productos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: 'administracion', component: AdministracionComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
