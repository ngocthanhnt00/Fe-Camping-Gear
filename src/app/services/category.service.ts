import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseCategory } from 'src/app/models/category';
import { ModelCategory } from 'src/app/models/category'; // Add this import

@Injectable()
export class CategoryService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient) { }
  getAll() {
    return this.httpClient.get<ApiResponseCategory>(`${this.url}/category`, { withCredentials: true })
  }
  get(id: string) {
    return this.httpClient.get<ApiResponseCategory>(`${this.url}/category/${id}`, { withCredentials: true })
  }
  add(category: FormData) { // Change type to FormData
    return this.httpClient.post<ApiResponseCategory>(`${this.url}/category`, category);
  }
  delete(id: string) {
    return this.httpClient.delete<ApiResponseCategory>(`${this.url}/category/${id}`)
  }
  update(id: string, category: FormData) {
    return this.httpClient.put<ApiResponseCategory>(`${this.url}/category/${id}`, category)
  }
}
