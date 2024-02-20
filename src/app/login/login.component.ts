import { Component } from '@angular/core';
/* import { AuthService } from ''; // Reemplaza 'tu-servicio-de-autenticacion' con el servicio real */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  /* constructor(private authService: AuthService) {} */

  /* onSubmit() {
    // Envia las credenciales al backend para autenticación
    this.authService.login(this.email, this.password)
      .subscribe((response) => {
        if (response.success) {
          alert('Inicio de sesión exitoso');
          // Redirige al usuario a la página principal de Pinterest o a donde sea necesario
        } else {
          alert('Credenciales incorrectas');
        }
      });
  }
 */

  onSubmit() { //Prueba para procesar el formulario
    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    if (this.email === 'usuario@example.com' && this.password === 'contraseña') {
      alert('Inicio de sesión exitoso');
      // Redirigir al usuario a otra página o realizar acciones adicionales
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
