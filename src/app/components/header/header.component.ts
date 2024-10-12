import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { InforUserService } from 'src/app/services/inforUser.service';
import { UserSessionService } from 'src/app/services/user-session.service';
import { ArtilcesService } from 'src/app/services/artilces.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword: string = "";
  searchResults: any = [];
  cartCounter: any = []
  userExist: boolean = true;
  userName: string = ''
  constructor(private authService: AuthService, private articleService: ArtilcesService, private userSessionService: UserSessionService, private infoUser: InforUserService, private router: Router) {
  }

  async ngOnInit() {
    this.updateCart()
    // this.authService.checkTokenAndRedirect();

    // Kiểm tra token mỗi 5 phút (300000ms)
    // setInterval(() => {
    //   this.authService.checkTokenAndRedirect();
    // }, 1 * 60 * 1000);
    this.userName = this.infoUser?.getUser() || ''
    console.warn(this.userName, "Boring")
    const isUser = this.authService.checkUser()
    try {
      // Gọi API để kiểm tra refresh token
      const refreshTokenResponse: any = await this.authService.checkRefreshToken().toPromise();
      console.log("Response from checkRefreshToken:", refreshTokenResponse);

      // Nếu refresh token hợp lệ, làm mới access token
      if (refreshTokenResponse.status === 200) {
        this.userExist = false;
      } else {
        this.userExist = true;
      }
    } catch (err) {
      this.userExist = true;
    }



  }
  searchProducts() {
    const searchResult = document.querySelector(".search-input-product") as HTMLElement
    if (this.keyword != "") {
      this.articleService.getArticles(this.keyword).subscribe(
        (articles) => {
          searchResult.style.display = "block"
          this.searchResults = articles.products; // Lưu kết quả vào biến
          console.log("Searchresult: ", this.searchResults)
        },
        (error) => {
          console.error('Lỗi khi tìm kiếm bài viết:', error);
        }
      );
    } else {
      searchResult.style.display = "none"
      this.searchResults = []; // Xóa kết quả nếu không có từ khóa
    }
  }
  updateCart() {
    this.userSessionService.cart$.subscribe(cart => {
      this.cartCounter = cart.length; // Cập nhật số lượng sản phẩm trong giỏ hàng
      console.log('Giỏ hàng đã được cập nhật:', this.cartCounter);
    });

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
