import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { PinComponent } from './pin/pin.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ExplorarComponent } from './explorar/explorar.component';
import { InicioComponent } from './inicio/inicio.component';


//Creación de rutas.
  const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'Registro',
      component: RegisterComponent
    },
    {
      path: 'LogIn',
      component: LoginComponent
    },
    {
      path: 'Explorar',
      component:ExplorarComponent
    },

  ];

@NgModule({
  //Declaración de los componentes creados.
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    DropdownMenuComponent,
    PinComponent,
    FeedComponent,
    ExplorarComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
