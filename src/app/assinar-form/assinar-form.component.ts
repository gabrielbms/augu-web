import { Component, OnInit } from '@angular/core';

const VAZIO = '';

@Component({
  selector: 'assinar-form',
  templateUrl: './assinar-form.component.html',
  styleUrls: ['./assinar-form.component.scss']
})
export class AssinarFormComponent implements OnInit {

  entrada: string = VAZIO;
  saida: string = VAZIO;

  constructor() { }

  limpar() {
    this.entrada = VAZIO;
  }

  assinar() {
    console.log(this.entrada)
  }

  saidaNaoEstaVazia() {
    return this.saida.length != 0;
  }

  ngOnInit(): void {
  }

}
