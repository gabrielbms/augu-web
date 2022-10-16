import { Component } from '@angular/core';
import { Navigation, Router, UrlTree } from '@angular/router';
import { AuthService } from './login-form/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuguWeb';

  mostraLogin: boolean = true;
  mostraMenuCompleto: boolean = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.mostrarMenuCompletoEmitter.subscribe(
      mostrar => this.mostraMenuCompleto = mostrar
    );
    this.authService.mostrarLoginEmitter.subscribe(
      mostrar => this.mostraLogin = mostrar
    );
  }
}
