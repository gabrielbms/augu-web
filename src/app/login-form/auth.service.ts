import { Usuario } from './usuario.ts.component';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  public mostrarMenuCompletoEmitter = new EventEmitter<boolean>();
  public mostrarLoginEmitter = new EventEmitter<boolean>();
  public mostrarTutorialEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'aluno' && usuario.senha === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuCompletoEmitter.emit(true);
      this.mostrarLoginEmitter.emit(false);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuCompletoEmitter.emit(false);
      this.mostrarLoginEmitter.emit(true);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
