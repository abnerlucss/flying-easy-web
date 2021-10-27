import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as mockGetInactiveGates from '../../assets/mock/mock-get-inactive-gates.json';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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

  // public callApiMethodPost(msvType: string, method: string, data: any): Promise<any> {
  //   let url = `${this.buildAddress(msvType)}/${method}`
  //   this.http.post<any>('url', data).subscribe(data => {

  //   })
  // }

  // async saveFlight(data) {
  //   const resp = await this.callApiMethodPost("embarque", "voo", data)
  //   return resp
  // }

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

  async getAllFlights(){
    const resp = await this.callApiMethodGet("embarque", "voo")

    return resp
  }

}




