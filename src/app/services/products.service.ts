import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get<ApiResponseProduct>(`${this.url}/products`, { withCredentials: true })
  }
  get(id: string) {
    return this.httpClient.get<ApiResponseProduct>(`${this.url}/products/${id}`, { withCredentials: true })
  }
  add(product: FormData) {
    return this.httpClient.post<ApiResponseProduct>(`${this.url}/products`, product);
  }
  delete(id: string) {
    return this.httpClient.delete<ApiResponseProduct>(`${this.url}/products/${id}`)
  }
  update(id: string, product: FormData) {
    return this.httpClient.put<ApiResponseProduct>(`${this.url}/products/${id}`, product)
  }
}
