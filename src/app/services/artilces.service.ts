import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtilcesService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient) { }
  getArticles(searchValue: string): Observable<any> {
    return this.httpClient.get(`${this.url}/search?title_like=${searchValue}`);
  }
}
