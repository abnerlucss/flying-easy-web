import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  @Input() gridOptions: GridOptions;
  @Input() fixHorizontalBar: boolean;
  @Input() width: string;
  @Input() height: string;
  @Input() pagination: boolean = false;
  @Input() tooltipDelay: number = 1;
  @Input() browserTooltip: boolean = true;

  columnDefs: ColDef[] = [
    { field: "idVoo", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], tooltipField: "id", pinned: 'left' },
    { field: "partida", headerName: "Partida", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Local de partida", cellClass: ["border-row"], tooltipField: "match", pinned: 'left' },
    { field: "aeroporto", headerName: "Aeroporto", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Aeroporto de partida", cellClass: ["border-row"], tooltipField: "airport", pinned: 'left' },
    { field: "dataHoraEmbarque", headerName: "Data", resizable: true, sortable: false, width: 108, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], tooltipField: "date", pinned: 'left' },
    { field: "dataHoraEmbarque", headerName: "Hora", resizable: true, sortable: false, width: 100, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], tooltipField: "hour", pinned: 'left' },
    { field: "destino", headerName: "Destino", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Destino", cellClass: ["border-row"], tooltipField: "destiny", pinned: 'left' },
    { field: "identificadorCompanhia", headerName: "Companhia", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Companhia Aérea", cellClass: ["border-row"], tooltipField: "company", pinned: 'left' },
  ];


  rowData = [
    {
      idVoo: 1,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-11-02T05:00:00",
      dataHoraDesembarque: "2021-11-02T09:00:00",
      destino: "Brasília",
      identificadorCompanhia: "GLO001",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 5
    },
    {
      idVoo: 2,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-11-02T05:00:00",
      dataHoraDesembarque: "2021-11-02T09:00:00",
      destino: "Brasília",
      identificadorCompanhia: "GLO001",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 1
    },
    {
      idVoo: 3,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-11-02T05:00:00",
      dataHoraDesembarque: "2021-11-02T09:00:00",
      destino: "Rio de Janeiro",
      identificadorCompanhia: "GLO001",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 2
    },
    {
      idVoo: 4,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-11-15T08:00:00",
      dataHoraDesembarque: "2021-11-15T12:00:00",
      destino: "Rio de Janeiro",
      identificadorCompanhia: "AZU002",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 1
    },
    {
      idVoo: 5,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-12-08T14:00:00",
      dataHoraDesembarque: "2021-12-08T16:00:00",
      destino: "Pernambuco",
      identificadorCompanhia: "AVA003",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 1
    },
    {
      idVoo: 6,
      partida: "Curitiba",
      aeroporto: "Aeroporto Internacional de Curitiba",
      dataHoraEmbarque: "2021-12-09T14:00:00",
      dataHoraDesembarque: "2021-12-09T16:00:00",
      destino: "São Paulo",
      identificadorCompanhia: "TAM004",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 1
    },
    {
      idVoo: 8,
      partida: "Salvador",
      aeroporto: "Salvador Aeroporto",
      dataHoraEmbarque: "2021-12-15T14:00:00",
      dataHoraDesembarque: "2021-12-15T16:00:00",
      destino: "São Paulo",
      identificadorCompanhia: "PAM005",
      qtdEconomica: 10,
      qtdExecutiva: 5,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 1
    },
    {
      idVoo: 9,
      partida: "Bahia",
      aeroporto: "Salvador Aeroporto",
      dataHoraEmbarque: "2021-12-15T15:00:00",
      dataHoraDesembarque: "2021-12-15T18:00:00",
      destino: "Curitiba",
      identificadorCompanhia: "AZU002",
      qtdEconomica: 1,
      qtdExecutiva: 2,
      qtdPrimeiraClasse: 3,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 5
    },
    {
      idVoo: 42,
      partida: "Minas Gerais",
      aeroporto: "Aeroporto de Minas Gerais",
      dataHoraEmbarque: "2021-12-15T15:00:00",
      dataHoraDesembarque: "2021-12-15T18:00:00",
      destino: "Porto Alegre",
      identificadorCompanhia: "AVA003",
      qtdEconomica: 2,
      qtdExecutiva: 2,
      qtdPrimeiraClasse: 2,
      status: "disponível",
      precoPrimeiraClasse: 950.33,
      precoExecutiva: 520.88,
      precoEconomica: 350.95,
      idPortao: 2
    },
    {
      idVoo: 43,
      partida: "Pernambuco",
      aeroporto: "Aeroporto de Pernambuco",
      dataHoraEmbarque: "2021-12-17T18:00:00",
      dataHoraDesembarque: "2021-12-17T20:00:00",
      destino: "Porto Alegre",
      identificadorCompanhia: "AZU002",
      qtdEconomica: 100,
      qtdExecutiva: 70,
      qtdPrimeiraClasse: 30,
      status: "disponível",
      precoPrimeiraClasse: 968.89,
      precoExecutiva: 510.88,
      precoEconomica: 370.95,
      idPortao: 2
    },
    {
      idVoo: 44,
      partida: "São Paulo",
      aeroporto: "Aeroporto Internacional de Guarulhos",
      dataHoraEmbarque: "2021-12-17T18:00:00",
      dataHoraDesembarque: "2021-12-17T20:00:00",
      destino: "Fortaleza",
      identificadorCompanhia: "AVA003",
      qtdEconomica: 120,
      qtdExecutiva: 80,
      qtdPrimeiraClasse: 20,
      status: "disponível",
      precoPrimeiraClasse: 968.89,
      precoExecutiva: 510.88,
      precoEconomica: 370.95,
      idPortao: 2
    }
  ]


  constructor(private elRef: ElementRef) {
    this.width = '100%';
    this.height = '100%';
    this.fixHorizontalBar = false;
    this.gridOptions = {};
  }



  ngOnInit() {

  }


}
