import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  public gridOptions: GridOptions;
  public fixHorizontalBar: boolean;
  public width: string;
  public height: string;
  public pagination: boolean = false;
  public tooltipDelay: number = 1;
  public browserTooltip: boolean = true;

  columnDefs: ColDef[] = [
    { field: "id", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], tooltipField: "id", pinned: 'left' },
    { field: "nome", headerName: "Nome", resizable: true, sortable: false, width: 300, headerClass: ['header-bg'], headerTooltip: "Local de partida", cellClass: ["border-row"], tooltipField: "match", pinned: 'left' },
    { field: "cpf", headerName: "CPF", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Aeroporto de partida", cellClass: ["border-row"], tooltipField: "airport", pinned: 'left' },
    { field: "email", headerName: "E-mail", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], tooltipField: "date", pinned: 'left' },
    { field: "telefone", headerName: "Telefone", resizable: true, sortable: false, width: 120, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], tooltipField: "hour", pinned: 'left' },
    { field: "dataNascimento", headerName: "Data de Nascimento", resizable: true, sortable: false, width: 170, headerClass: ['header-bg'], headerTooltip: "Destino", cellClass: ["border-row"], tooltipField: "destiny", pinned: 'left' },
  ];


  rowData = [
    {
      id: 1,
      nome: "Abner Lucas",
      cpf: "51141537818",
      email: "abnerlucasdarochasantos@gmail.com",
      telefone: "11998765432",
      dataNascimento: "03/12/2002",
      senha: null
  },
  {
      id: 2,
      nome: "Guilherme Fonseca",
      cpf: "33422727086",
      email: "guilherme@gmail.com",
      telefone: "11987654321",
      dataNascimento: "21/07/1999",
      senha: null
  },
  {
      id: 3,
      nome: "Vitor Loredo Mesquita",
      cpf: "12603690051",
      email: "vitor.mesquita@valemobi.com.br",
      telefone: "11987654321",
      dataNascimento: "30/10/1997",
      senha: null
  },
  {
      id: 4,
      nome: "Rafael Coelho",
      cpf: "91390289095",
      email: "rafael.coelho@valemobi.com.br",
      telefone: "11998765432",
      dataNascimento: "01/01/2001",
      senha: null
  },
  {
      id: 5,
      nome: "Giovanna de Melo Valentin",
      cpf: "40773790080",
      email: "giovanna.valentin@valemobi.com.br",
      telefone: "11998765432",
      dataNascimento: "06/11/2003",
      senha: null
  },
  {
      id: 6,
      nome: "Joao ",
      cpf: "54467524061",
      email: "joao@gmail.com",
      telefone: "11998765432",
      dataNascimento: "02/12/1998",
      senha: null
  },
  {
      id: 7,
      nome: "Jonas Bezerra",
      cpf: "91830715046",
      email: "jonas.bezerra@valemobi.com.br",
      telefone: "11998765432",
      dataNascimento: "04/06/1997",
      senha: null
  },
  {
      id: 8,
      nome: "Rafael da Silva Coelho ",
      cpf: "35673077890",
      email: "rafaelcoelho3110@gmail.com",
      telefone: "11963162306",
      dataNascimento: "31/10/2001",
      senha: null
  },
  {
      id: 9,
      nome: "John Victor ",
      cpf: "52704452806",
      email: "john.deus39@gmail.com",
      telefone: "11985257334",
      dataNascimento: "17/08/2001",
      senha: null
  },
  {
      id: 13,
      nome: "teste",
      cpf: "26956441080",
      email: "teste@gmail.com",
      telefone: "11998765432",
      dataNascimento: "13/12/2002",
      senha: null
  },
  {
      id: 16,
      nome: "teste",
      cpf: "70554830000",
      email: "teste@gmail.com",
      telefone: "11999876543",
      dataNascimento: "21/12/2002",
      senha: null
  },
  {
      id: 17,
      nome: "teste",
      cpf: "90266762042",
      email: "teste@gmail.com",
      telefone: "11998765432",
      dataNascimento: "01/01/2001",
      senha: null
  },
  {
      id: 22,
      nome: "teste teste",
      cpf: "25199798014",
      email: "teste@gmail.com",
      telefone: "11998765432",
      dataNascimento: "01/01/2000",
      senha: null
  },
  {
      id: 25,
      nome: "teste",
      cpf: "01623340012",
      email: "teste@gmail.com",
      telefone: "11998765432",
      dataNascimento: "01/01/2001",
      senha: null
  },
  {
      id: 29,
      nome: "Teste",
      cpf: "14091482031",
      email: "teste@gmail.com",
      telefone: "11987654321",
      dataNascimento: "01/01/1999",
      senha: null
  },
  {
      id: 30,
      nome: "Alexandre Tessaroto",
      cpf: "51869334060",
      email: "alexandre.tessaroto@gmail.com",
      telefone: "11998765432",
      dataNascimento: "02/11/1992",
      senha: null
  }
  ]


  constructor(private elRef: ElementRef, private router:Router) {
    this.width = '100%';
    this.height = '100%';
    this.gridOptions = {};
  }

  ngOnInit() {
  }
  
}
