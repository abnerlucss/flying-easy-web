import { Component, ElementRef, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { element } from 'protractor';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  public gridOptions: GridOptions;
  public fixHorizontalBar: boolean;
  public width: string;
  public height: string;
  public pagination: boolean = false;
  public tooltipDelay: number = 1;
  public browserTooltip: boolean = true;
  public rowData: any = []

  columnDefs: ColDef[] = [
    { field: "idVoo", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], tooltipField: "id", pinned: 'left' },
    { field: "partida", headerName: "Partida", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Local de partida", cellClass: ["border-row"], tooltipField: "match", pinned: 'left' },
    { field: "aeroporto", headerName: "Aeroporto", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Aeroporto de partida", cellClass: ["border-row"], tooltipField: "airport", pinned: 'left' },
    { field: "dataHoraEmbarque", headerName: "Data", resizable: true, sortable: false, width: 108, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], tooltipField: "date", pinned: 'left' },
    { field: "dataHoraEmbarque", headerName: "Hora", resizable: true, sortable: false, width: 100, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], tooltipField: "hour", pinned: 'left' },
    { field: "destino", headerName: "Destino", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Destino", cellClass: ["border-row"], tooltipField: "destiny", pinned: 'left' },
    { field: "identificadorCompanhia", headerName: "Companhia", resizable: true, sortable: false, width: 150, headerClass: ['header-bg'], headerTooltip: "Companhia Aérea", cellClass: ["border-row"], tooltipField: "company", pinned: 'left' },
  ];

  constructor(private elRef: ElementRef, private dashboardService: DashboardService) {
    this.width = '100%';
    this.height = '100%';
    this.fixHorizontalBar = false;
    this.gridOptions = {};
  }



  ngOnInit() {
    this.getAllFlights()
  }

  async getAllFlights(){
    const resp = await this.dashboardService.getAllFlights()

    if(resp){
      resp.map(element => {
      })

      this.rowData = resp
    }
  }

}
