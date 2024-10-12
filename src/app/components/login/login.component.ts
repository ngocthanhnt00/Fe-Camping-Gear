import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { InforUserService } from 'src/app/services/inforUser.service';
import { UserSessionService } from 'src/app/services/user-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginF: FormGroup;
  error!: string;
  errorPassword: string = '';
  public displayName: string = '';
  constructor(private authService: AuthService, private userSessionService: UserSessionService, private router: Router) {
    this.loginF = new FormGroup({
      email: new FormControl("ngocthanhnt04@gmail.com", [Validators.required]),
      password: new FormControl("createntnt", [Validators.required]),
    })
  }

  ngOnInit() {
  }
  onLogin(): void {
    if (this.loginF.invalid) {
      alert("Vui lòng nhập đẩy đủ thông tin");
      return console.error("Vui lòng nhập đẩy đủ thông tin");
    } else {
      console.log("Check");
      this.authService.login(this.loginF.value).subscribe(async (res: any) => {
        // console.log(res, "res");
        switch (res.status) {
          case 200: {
            alert("Đăng nhập thành công");
            const { token, refreshToken, user } = res;
            console.log(token, refreshToken, user, "qqqqqqqq")
            localStorage.setItem("token", token);
            // localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("user", JSON.stringify(user))
            if (user.role === 1) { // Nếu là user
              // this.userSessionService.setSessionCart(cart)
              this.userSessionService.getData();
              location.assign('/')
            } else if (user.role === 2) { // Nếu là admin
              location.assign("/admin1")
            }
            console.log(token, refreshToken, user);
            break;
          }
          case 401: {
            this.error = res.message;
            break;
          }
          case 402: {
            this.errorPassword = res.message;
            break;
          }
        }
      }, async (error: any) => {
        this.error = error.error.message;
        console.error("Co Loi");
      });
    }
  }
}
