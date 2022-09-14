import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  url :any = 'http://localhost:8000/';
  /**
   * @method
   * @desc makes HTTP get call
   * @param url {String} url where ajax call has to be made
   * @return {Promise} HTTP promise object
   */
  getData() {
    return this.http.get(this.url);
  }
}
