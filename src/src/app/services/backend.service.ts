import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  get() {
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/product', { headers: headers}).map(res => res.json());
  }

  getcat() {
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return this.http.get('http://localhost:3000/category', { headers: headers}).map(res => res.json());
  }

  getitem(item){
    const headers = new Headers;
    headers.append('Content-Type', 'application/json');
    item = { "name":""+item+""}
    return this.http.post('http://localhost:3000/item',item, { headers: headers}).map(res => res.json());
  }

  getCustomerCart(name){
    const headers = new Headers;
    headers.append('Content-Type','app;ocation/json');
    let custname = { "name":""+name+""}
    return this.http.post('http://localhost:3000/customer',custname, { headers: headers}).map(res => res.json());
  }

}
