import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario.ts.component';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  public usuario: Usuario = new Usuario;

  constructor(private authService: AuthService) { }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
