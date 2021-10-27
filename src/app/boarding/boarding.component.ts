import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss']
})
export class BoardingComponent implements OnInit {

  public gridOptions: GridOptions;
  public fixHorizontalBar: boolean;
  public width: string;
  public height: string;
  public pagination: boolean = false;
  public tooltipDelay: number = 1;
  public browserTooltip: boolean = true;
  public rowData:any = []

  columnDefs: ColDef[] = [
    { field: "idEmbarque", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], pinned: 'left' },
    { field: "dataEmbarque", headerName: "Data", resizable: true, sortable: false, width: 80, headerClass: ['header-bg'], headerTooltip: "Data do embarque", cellClass: ["border-row"], pinned: 'left' },
    { field: "horaEmbarque", headerName: "Hora", resizable: true, sortable: false, width: 80, headerClass: ['header-bg'], headerTooltip: "Hora do embarque", cellClass: ["border-row"], pinned: 'left' },
    { field: "classe", headerName: "Classe", resizable: true, sortable: false, width: 100, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], pinned: 'left' },
    { field: "codigoLocalizador", headerName: "Código Localizador", resizable: true, sortable: false, width: 160, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], pinned: 'left' },
    { field: "identificadorComp", headerName: "Identificador da Companhia", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Destino", cellClass: ["border-row"], pinned: 'left' },
    { field: "numeroAssento", headerName: "Número do assento", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Companhia Aérea", cellClass: ["border-row"], pinned: 'left' },
    { field: "idVoo", headerName: "Id do voo", resizable: true, sortable: false, width: 100, headerClass: ['header-bg'], headerTooltip: "Companhia Aérea", cellClass: ["border-row"], pinned: 'left' },
    { field: "destino", headerName: "Destino", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Companhia Aérea", cellClass: ["border-row"], pinned: 'left' },
  ];

  constructor(private elRef: ElementRef, private dashboardService:DashboardService) {
    this.width = '100%';
    this.height = '100%';
    this.gridOptions = {};
  }

  ngOnInit() {
    this.getAllBoardings();
  }

  async getAllBoardings() {
    const resp = await this.dashboardService.getAllBoardings()

    if (resp) {
      this.rowData = resp
    }
  }

}
