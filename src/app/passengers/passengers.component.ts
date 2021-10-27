import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DashboardService } from '../service/dashboard.service';


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
  public rowData: any = []

  columnDefs: ColDef[] = [
    { field: "id", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], tooltipField: "id", pinned: 'left' },
    { field: "nome", headerName: "Nome", resizable: true, sortable: false, width: 300, headerClass: ['header-bg'], headerTooltip: "Local de partida", cellClass: ["border-row"], tooltipField: "match", pinned: 'left' },
    { field: "cpf", headerName: "CPF", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Aeroporto de partida", cellClass: ["border-row"], tooltipField: "airport", pinned: 'left' },
    { field: "email", headerName: "E-mail", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], tooltipField: "date", pinned: 'left' },
    { field: "telefone", headerName: "Telefone", resizable: true, sortable: false, width: 120, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], tooltipField: "hour", pinned: 'left' },
    { field: "dataNascimento", headerName: "Data de Nascimento", resizable: true, sortable: false, width: 170, headerClass: ['header-bg'], headerTooltip: "Destino", cellClass: ["border-row"], tooltipField: "destiny", pinned: 'left' },
  ];


  constructor(private elRef: ElementRef, private router:Router, private dashboardService:DashboardService) {
    this.width = '100%';
    this.height = '100%';
    this.gridOptions = {};
  }

  ngOnInit() {
      this.getAllPassangers()
  }

  async getAllPassangers() {
    const resp = await this.dashboardService.getAllPassengers()

    if (resp) {
        this.rowData = resp
    }
  }
  
}
