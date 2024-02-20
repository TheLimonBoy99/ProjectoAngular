import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: ''
  };

  register(){
    console.log('Usuario registrado:', this.user);
  }
}
