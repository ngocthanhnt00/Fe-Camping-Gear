import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Lấy token từ localStorage
    const token = localStorage.getItem('token');

    if (token && !this.authService.isTokenExpired()) {
      // Nếu token còn hạn, thêm vào header của request
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(clonedReq);
    } else {
      // Nếu token đã hết hạn, điều hướng về trang đăng nhập
      this.authService.signOut();
      this.router.navigate(['/login']);
      return next.handle(req); // Hoặc bạn có thể throwError tại đây để dừng request
    }
  }
}
