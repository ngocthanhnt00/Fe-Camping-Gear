import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient) { }
  private createHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example: adding token from localStorage
      'Content-Type': 'application/json' // Or other necessary headers
    });
  }
  getAll() { // Ensure the return type is Observable<ApiResponse>
    const headers = this.createHeaders();
    return this.httpClient.get<ApiResponseProduct>(`${this.url}/products`, { headers })
  }
  get(id: string) {
    return this.httpClient.get<ApiResponseProduct>(`${this.url}/products/${id}`)
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
