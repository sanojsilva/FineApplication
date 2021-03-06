import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  url: string = environment.apiHost;

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  public validateCode(code) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });
    

    return this.http.post(
      this.url + '/validate-code',
      JSON.stringify({code}),
      {headers}
    )
  }

  public getFines() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });

    return this.http.get(
      this.url + '/get-fines',
      {headers}
    )
  }

  public getHistory(administrativeNo) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });
  
    return this.http.get(
      this.url + '/get-history?administrativeNo=' + administrativeNo,
      {headers}
    )
  }

  public addFines(fines, policeman, administrativeNo) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });
    

    return this.http.post(
      this.url + '/add-fines',
      JSON.stringify({fines, policeman, administrativeNo}),
      {headers}
    )
  }

}
