import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:5032"
  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService, private router: Router) { }
  // Đăng ký
  register(body: any) {
    return this.httpClient.post<any>(`${this.url}/auth/register`, body)
  }
  login(data: any) {
    return this.httpClient.post(`${this.url}/auth/login`, data)
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
      return true; // No token means expired or not logged in
    }
    return this.jwtHelper.isTokenExpired(token);
  }

  // Hàm kiểm tra token và điều hướng về trang login nếu hết hạn
  checkTokenAndRedirect() {
    if (this.isTokenExpired()) {
      // Nếu token hết hạn, chuyển hướng về trang login
      console.log('Token đã hết hạn, chuyển về trang đăng nhập');
      this.router.navigate(['/login']);
    }
  }
  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
