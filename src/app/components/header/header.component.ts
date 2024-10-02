import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { InforUserService } from 'src/app/services/inforUser.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userExist: boolean = false;
  userName: string = ''
  constructor(private authService: AuthService, private infoUser: InforUserService, private router: Router) {
  }

  ngOnInit() {
    this.authService.checkTokenAndRedirect();

    // Kiểm tra token mỗi 5 phút (300000ms)
    setInterval(() => {
      this.authService.checkTokenAndRedirect();
    }, 1 * 60 * 1000);

    const isUser = this.authService.checkUser()
    this.userExist = this.authService.isTokenExpired()
    this.userName = this.infoUser?.getUser() || ''
    console.warn(this.userName, "Boring")
  }

  getInitials(name: string): string {
    console.log(name, "SSSSS222")
    const names = name.split('')[0];
    console.log(name, "SSS")
    return names
    // .map(n => n.charAt(0).toUpperCase()).join('');
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  signOut() {
    this.authService.signOut();
  }

}
