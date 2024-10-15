import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const adminGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router); // Inject Router

  // Lấy token từ localStorage
  const token = localStorage.getItem('token');
  console.log("Token from localStorage:", token);

  // Kiểm tra token đã hết hạn chưa
  if (!authService.isTokenExpired()) {
    console.warn("Token is valid");
    const user = localStorage.getItem("user");
    const role = user ? JSON.parse(user).role : 1;
    if (role == 2) {
      return true
    } else {
      // location.assign("/")
      return false
    }
    // return true; // Token hợp lệ, cho phép truy cập
  } else {
    console.warn("Token is expired, attempting to refresh token...");

    try {
      // Gọi API để kiểm tra refresh token
      const refreshTokenResponse: any = await authService.checkRefreshToken().toPromise();
      console.log("Response from checkRefreshToken:", refreshTokenResponse);

      // Nếu refresh token hợp lệ, làm mới access token
      if (refreshTokenResponse.status === 200) {
        const refreshTokenResult: any = await authService.refreshToken().toPromise();
        console.log("Response from refreshToken:", refreshTokenResult);

        // Lưu access token mới vào localStorage
        const { accessToken } = refreshTokenResult;
        localStorage.setItem('token', accessToken);
        console.warn("Token refreshed and saved:", accessToken);
        const user = localStorage.getItem("user");
        const role = user ? JSON.parse(user).role : 1;
        if (role == 2) {
          return true
        } else {
          location.assign("/")
          return false
        }
        // Tiếp tục truy cập vì token đã được làm mới
      } else {
        console.warn("Refresh token is not valid, redirecting to login");
        router.navigate(['/login']);
        return false;
      }
    } catch (err) {
      // Nếu có lỗi trong quá trình refresh token, điều hướng về trang đăng nhập
      console.error("Error during token refresh:", err);
      router.navigate(['/login']);
      return false;
    }
  }
};
