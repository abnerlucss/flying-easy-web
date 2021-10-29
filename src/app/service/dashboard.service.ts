import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as mockGetInactiveGates from '../../assets/mock/mock-get-inactive-gates.json';
import * as mockStates from '../../assets/mock/mock-states.json';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private flight: Flight = new Flight()

  handleError: any;

  constructor(private http: HttpClient) { }

  buildAddress(msvType: string) {
    return `https://msv-${msvType}.herokuapp.com/v1`;
  }

  async getInactiveGates() {

    const resp = await this.callApiMethodGet("embarque", "portao/inativos")
    return resp
  }


  public callApiMethodGet(msvType: string, method: string, data: string = null): Promise<any> {
    let url = `${this.buildAddress(msvType)}/${method}`
    if (data) url = `${url}/${data}`
    const headers = new HttpHeaders().set('Accept', '*/*').set('Content-Type', 'application/json').set('Referrer-policy', 'strict-origin-when-cross-origin')
    const options = {
      headers,
      withCredentials: false,
    };
    return new Promise<any>((resolve: any, reject: any) => {
      this.http.get<any>(url, options)
        // .debounceTime(500)
        .subscribe((response: any): void => { resolve(response); }, reject);
    });
  }

  saveFlight(flight: any): Promise<any> {
    const headers = new HttpHeaders().set('Accept', '*/*').set('Content-Type', 'application/json').set('Referrer-policy', 'strict-origin-when-cross-origin')
    const options = {
      headers,
      withCredentials: false,
    };
    return new Promise<any>((resolve: any, reject: any) => {
      this.http.post<any>('https://msv-embarque.herokuapp.com/v1/voo', flight, options)
      // .debounceTime(500)
      .subscribe((response: any): void => { resolve(response); }, reject);
    })
  }

  async getAllCompanies() {
    const resp = await this.callApiMethodGet("passagem", "companhia")

    return resp
  }

  async getActiveGates() {
    const resp = await this.callApiMethodGet("embarque", "portao/ativos")

    return resp
  }

  async getAllBoardings() {
    const resp = await this.callApiMethodGet("embarque", "embarque")

    return resp
  }

  async getAllPassengers() {
    const resp = await this.callApiMethodGet("passagem", "passageiro")

    return resp
  }

  async getAverageBoardings() {
    const resp = await this.callApiMethodGet("embarque", "/embarque/embarques/semanais")
    
    return resp
  }

  async getAllFlights() {
    const resp = await this.callApiMethodGet("embarque", "voo")

    return resp
  }

  async getQttBoardingsToday(){
    const resp = await this.callApiMethodGet("embarque", "embarque/embarques/hoje")

    return resp
  }

  async getQttFlightsToday(){
    const resp = await this.callApiMethodGet("embarque", "voo/voos/hoje")

    return resp
  }

  getAllStates() {
    const resp = mockStates.result

    return resp
  }


  setStep1(step1: any) {
    console.log(step1)
    
    this.flight.dataHoraEmbarque = step1.dataHoraEmbarque
    this.flight.partida = step1.partida
    this.flight.status = step1.status
    this.flight.aeroporto = step1.aeroporto
  }

  setStep2(step2: any) {
    console.log(step2)

    this.flight.destino = step2.destino
    this.flight.identificadorCompanhia = step2.identificadorCompanhia
    this.flight.dataHoraDesembarque = step2.dataHoraDesembarque
    this.flight.idPortao = parseInt(step2.idPortao)
  }

  setStep3(step3: any) {
    console.log(step3)

    this.flight.qtdEconomica = step3.qtdEconomica
    this.flight.qtdExecutiva = step3.qtdExecutiva
    this.flight.qtdPrimeiraClasse = step3.qtdPrimeiraClasse
  }

  getFlight() {
    return this.flight
  }

  login(data:any){
    return data.email.value == "admin@email.com" && data.password.value == "Admin"
  }


}




function catchError(arg0: any): import("rxjs").OperatorFunction<import("@angular/common/http").HttpEvent<Flight>, Flight> {
  throw new Error('Function not implemented.');
}

