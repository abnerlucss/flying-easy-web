import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public chart: Chart

  public cardsContents: any = [
    {
      legend: "Voos previstos para hoje:",
      value: 80
    },
    {
      legend: "Embarques previstos para hoje:",
      value: "23.000"
    },
    {
      legend: "Portões inativos:",
      value: 0
    },
  ]

  data = [{
    name: 'Média de embarques diários',
    data: [],
    borderRadius: 3,
    color: '#668BB7'
  }];

  chartOptions: any = {
    chart: {
      type: "column",
    },
    title: {
      text: "Embarques semanais",
      align: "left",
      margin: 10,
      style: {
        color: "#333333",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "start"
      }
    },
    xAxis: {
      categories: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    },
    yAxis: {
      stackLabels: {
        style: {
          color: '#343434'
        },
        enabled: true,
        verticalAlign: 'top'
      },
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      }
    },
    series: this.data
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.callInactiveGates()
    this.callAverageBoardings()
  }

  async callInactiveGates() {
    const resp = await this.dashboardService.getInactiveGates()

    if (resp) this.cardsContents[2].value = resp.length;
  }

  async callAverageBoardings() {
    const resp = await this.dashboardService.getAverageBoardings()
    if (resp) this.updateChart(resp)
  }

  updateChart(resp) {
    this.data[0].data = [
      resp.domingo,
      resp.segundaFeira,
      resp.tercaFeira,
      resp.quartaFeira,
      resp.quintaFeira,
      resp.sextaFeira,
      resp.sabado
    ]
    this.chartOptions.series = this.data
    this.chart = new Chart(this.chartOptions)
  }

}
