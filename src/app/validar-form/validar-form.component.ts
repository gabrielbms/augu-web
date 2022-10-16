import { Component, OnInit } from '@angular/core';

const VAZIO = '';

@Component({
  selector: 'validar-form',
  templateUrl: './validar-form.component.html',
  styleUrls: ['./validar-form.component.scss']
})
export class ValidarFormComponent implements OnInit {

  codigo: string = VAZIO;
  retorno: string = VAZIO;

  constructor() { }

  limpar() {
    this.codigo = VAZIO;
  }

  validar() {
    console.log(this.codigo)
  }

  saidaNaoEstaVazia() {
    return this.retorno.length != 0;
  }

  ngOnInit(): void {
  }

}
