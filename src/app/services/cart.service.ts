import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'http://localhost:5032'
  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get(`${this.url}/cart/item`, { withCredentials: true })
  }
  add(data: any) {
    return this.httpClient.post(`${this.url}/cart/create`, data);
  }
  delete(id: string) {
    return this.httpClient.delete(`${this.url}/cart/delete/${id}`)
  }

}
