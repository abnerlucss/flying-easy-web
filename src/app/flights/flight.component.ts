import { Component, ElementRef, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DashboardService } from '../service/dashboard.service';
import * as moment from 'moment';
import { format } from 'path';

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
  public destiny: any
  public dateFlight: any
  public timeFlight: any

  columnDefs: ColDef[] = [
    { field: "idVoo", headerName: "#", resizable: true, sortable: false, width: 50, headerClass: ['header-bg-id header-bg'], headerTooltip: "Id", cellClass: ["my-class"], tooltipField: "id", pinned: 'left' },
    { field: "partida", headerName: "Partida", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Local de partida", cellClass: ["border-row"], tooltipField: "match", pinned: 'left' },
    { field: "aeroporto", headerName: "Aeroporto", resizable: true, sortable: false, width: 200, headerClass: ['header-bg'], headerTooltip: "Aeroporto de partida", cellClass: ["border-row"], tooltipField: "airport", pinned: 'left' },
    { field: "data", headerName: "Data", resizable: true, sortable: false, width: 108, headerClass: ['header-bg'], headerTooltip: "Data de partida", cellClass: ["border-row"], tooltipField: "date", pinned: 'left' },
    { field: "hora", headerName: "Hora", resizable: true, sortable: false, width: 100, headerClass: ['header-bg'], headerTooltip: "Hora de partida", cellClass: ["border-row"], tooltipField: "hour", pinned: 'left' },
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

  async getAllFlights() {
    const resp = await this.dashboardService.getAllFlights()

    if (resp) {
      resp.map((flight) => {
        let dateTime = flight.dataHoraEmbarque
        dateTime = dateTime.split('T')
        dateTime[0] = moment(dateTime[0]).format('DD/MM/YYYY')
        dateTime[1] = dateTime[1].slice(0, -3)

        flight.data = dateTime[0]
        flight.hora = dateTime[1]
      })
      this.rowData = resp
    }
  }

  async filter() {
    await this.getAllFlights()


    let filteredData = []
    let filteredItems = []
    let filters = {
      destinyFilter: this.destiny,
      dateFilter: this.dateFlight,
      timeFilter: this.timeFlight
    }


    if (filters.destinyFilter && Boolean(filters.destinyFilter)) {
      this.rowData.map(element => {
        if (element.destino.toLowerCase() == filters.destinyFilter.toLowerCase()) filteredData.push(element)
      })
    }


    if (filters.dateFilter && Boolean(filters.dateFilter)) {
      if (filteredData.length == 0) {
        this.rowData.map(element => {
          if (element.data == moment(filters.dateFilter).format("DD/MM/YYYY")) filteredData.push(element)
        })
      }
      else {
        filteredItems = []
        filteredData.map(element => {
          if (element.data == moment(filters.dateFilter).format("DD/MM/YYYY")) filteredItems.push(element)
        })
        filteredData = filteredItems
      }
    }


    if (filters.timeFilter && Boolean(filters.timeFilter)) {
      if (filteredData.length == 0) {
        this.rowData.map(element => {
          if (element.hora == filters.timeFilter) filteredData.push(element)
        })
      }
      else {
        filteredItems = []
        filteredData.map(element => {
          if (element.hora == filters.timeFilter) filteredItems.push(element)
        })
        filteredData = filteredItems

      }
    }
    
    let checkFilters = (filters.dateFilter == '' || !filters.dateFilter) && (filters.destinyFilter == '' || !filters.destinyFilter) && (filters.timeFilter == '' || !filters.timeFilter)
    
    this.rowData = checkFilters ? this.rowData : filteredData 

  }

}
