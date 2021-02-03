import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  valor: number;
  exibeTabela: boolean = false;
  cursos = ['Ciência da Computação', 'Sistemas de Informação', 'Análise e Desenvolvimento de Sistemas', 'Engenharia da Computação']
  listaAlunos: alunos[] = [
    {
      nome: 'aluno1',
      idade: 1,
      email: 'teste1@gmail.com',
      curso: 'Ciência da Computação',
    },
    {
      nome: 'aluno2',
      idade: 2,
      email: 'teste2@gmail.com',
      curso: 'Análise e Desenvolvimento de Sistemas',
    },
    {
      nome: 'aluno3',
      idade: 3,
      email: 'teste3@gmail.com',
      curso: 'Engenharia da Computação',
    },
    {
      nome: 'aluno4',
      idade: 4,
      email: 'teste4@gmail.com',
      curso: 'Sistemas de Informação',
    },
  ];
  
  ngOnInit(): void {
    this.valor = 4;
  }

  mudarValor() {
    this.valor++;
    this.adicionaAluno();
  }
  
  adicionaAluno() {
    this.listaAlunos.push({
      nome: 'aluno' + this.valor,
      idade: this.valor,
      email: 'aluno' + this.valor + '@gmail.com',
      curso: this.cursos[Math.floor(Math.random() * 4)],
    });
  }
  reiniciarValor() {

    this.valor = 0;
    this.limparLista();
  }

  limparLista(){
    this.listaAlunos.splice(0, this.listaAlunos.length);
  }

  exibirTabela() {
    if (this.exibeTabela) {
      this.exibeTabela = false;
    } else {
      this.exibeTabela = true;
    }
  }
}
