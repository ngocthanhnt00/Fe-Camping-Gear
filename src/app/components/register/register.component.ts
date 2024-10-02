import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Import FormControl
import { AuthService } from 'src/app/services/auth.service';
import { error } from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  registerF: FormGroup;
  error: string = '';
  errorPassword: string = '';

  constructor(private authService: AuthService) {

    this.registerF = new FormGroup({
      displayname: new FormControl("Tessttt", [Validators.required, Validators.minLength(6)]), // Use FormControl
      email: new FormControl("ngocthanhnt04@gmail.com", [Validators.required, Validators.email]), // Use FormControl
      password: new FormControl("123456", [Validators.required, Validators.minLength(6)]), // Use FormControl
      confirm_password: new FormControl("123456", Validators.required) // Use FormControl
    });
  }

  ngOnInit() {
  }

  onRegister(): void {
    if (this.registerF.invalid) {
      alert("Vui lòng nhập hợp lệ");
      return console.log("Không hợp lệ");
    }
    this.authService.register(this.registerF.value).subscribe((res: any) => {
      console.log(res);
      switch (res.status) {
        case 200: {
          alert("Đăng ký thành công");
          window.location.href = "/login"
          break;
        }
        case 401: {
          this.error = res.message;
          break;
        }
      }
      // window.location.href = '/home';
    }, (error: any) => {
      this.error = error.error.message
      console.log(error, "Checkerror")
      console.error(error);
    });
  }
}
