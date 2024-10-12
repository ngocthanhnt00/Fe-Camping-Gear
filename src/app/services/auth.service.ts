import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserSessionService } from './user-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient, private userSessionService: UserSessionService, private jwtHelper: JwtHelperService, private router: Router) { }

  // Đăng ký
  register(body: any) {
    return this.httpClient.post<any>(`${this.url}/auth/register`, body, { withCredentials: true });
  }

  login(data: any) {
    return this.httpClient.post(`${this.url}/auth/login`, data, { withCredentials: true });
  }

  refreshToken() {
    return this.httpClient.post(`${this.url}/auth/refresh`, {}, { withCredentials: true });
  }

  checkRefreshToken() {
    return this.httpClient.post(`${this.url}/auth/check-refresh-token`, {}, { withCredentials: true });
  }
  signOut() {
    console.log("Calling sign out API");
    return this.httpClient.post(`${this.url}/auth/signout`, {}, { withCredentials: true })
      .subscribe((res: any) => {
        console.log("API Response:", res);  // Log toàn bộ response
        if (res && res.status === 200) {  // Kiểm tra res.status trong body JSON
          console.log("Status is 200, proceeding with logout");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          this.userSessionService.clearSessionCart();
        } else {
          console.log("Response status is not 200, actual status:", res.status);
        }
      }, (error: any) => {
        console.error("API call error:", error);  // Log lỗi khi có lỗi xảy ra
      });
  }


  checkUser() {
    const userString = localStorage.getItem("user");
    const checkExistUser = userString ? JSON.parse(userString) : null;
    if (checkExistUser) {
      console.log("Co tai khoan")
      return { isUser: true, checkExistUser }
    } else {
      console.log("Khong co tai khoan")
      return { isUser: false, checkExistUser }
    }
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return true; // If the token expired, it true and opposite
    }
    const isExpired = this.jwtHelper.isTokenExpired(token);
    console.log("Is token expired: ", isExpired);
    return isExpired
  }

}
