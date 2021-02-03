import { Component, OnInit } from '@angular/core';
import { professores } from '../model/professores';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  constructor() {}

  
  exibeTabela: boolean = false;
  
  listaProfessores: professores[] = [
    {
      nome: 'professor1',
      curso: 'Ciência da Computação',
    },
    {
      nome: 'professor2',
      curso: 'Análise e Desenvolvimento de Sistemas',
    },
    {
      nome: 'professor3',
      curso: 'Engenharia da Computação',
    },
    {
      nome: 'professor4',
      curso: 'Sistemas de Informação',
    },
  ];
  
  ngOnInit(): void {
    
  }


  exibirTabela() {
    if (this.exibeTabela) {
      this.exibeTabela = false;
    } else {
      this.exibeTabela = true;
    }
  }
}
