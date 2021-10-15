import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as mockGetInactiveGates from '../../assets/mock/mock-get-inactive-gates.json';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  //   buildAddress(msvType: string) {
  //     return `https://msv-${msvType}.herokuapp.com/v1`;
  //   }

  async getInactiveGates() {

    // const resp = await this.callApiMethodGet("embarque", "portao/inativos")
    const resp = mockGetInactiveGates.default
    return resp.length
  }


  //   public callApiMethodGet(msvType: string, method: string, data: string = null): Promise<any> {
  //     let url = `${this.buildAddress(msvType)}/${method}`
  //     console.log(url);
  //     if (data) url = `${url}/${data}`
  //     const headers = new HttpHeaders().set('Accept', '*/*').set('Content-Type', 'application/json').set('Referrer-policy', 'strict-origin-when-cross-origin')
  //     const options = {
  //       headers,
  //       withCredentials: false,
  //     };
  //     return new Promise<any>((resolve: any, reject: any) => {
  //       this.http.get<any>(url, options)
  //         // .debounceTime(500)
  //         .subscribe((response: any): void => { resolve(response); }, reject);
  //     });
  //   }

  //   public callMethodGet(url: string, body: any, method?: string, parseJson?: boolean): Promise<any> {
  //     url = this.config.buildAddress(url);
  //     return this.resolvePromiseGet(url, body, method, parseJson);
  // }



  // public callApiMethod(method: string, args: { [id: string]: any }): Promise<any> {
  //   let url = `${this.urlServer}/${method}`
  //   let headers = new HttpHeaders().set('Accept', 'application/json')
  //     .set('Content-Type', 'application/json');
  //   const options = {
  //     headers,
  //     withCredentials: true
  //   };
  //   const data = { ...args };
  //   return new Promise<any>((resolve: any, reject: any) => {
  //     this.http.post<any>(url, data, options)
  //       .map((response: Response): Response => {
  //         return resolve(response);
  //       })
  //       .catch((response: Response): Observable<Response> => {
  //         return Observable.throwError(response)
  //       })
  //       .debounceTime(500)
  //       .subscribe((response: any): void => { resolve(response); }, reject);
  //   });
  // }

}




