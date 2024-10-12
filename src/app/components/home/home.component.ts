import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { ModelProducts } from "src/app/models/product";
import { ModelCategory } from "src/app/models/category";
import { ProductsService } from 'src/app/services/products.service';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';
import { UserSessionService } from 'src/app/services/user-session.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {

  products!: ModelProducts[];
  categories!: ModelCategory[];
  viewInitialized = false; // Để kiểm tra view đã được khởi tạo hay chưa

  constructor(private productService: ProductsService, private header: HeaderComponent, private userSessionService: UserSessionService, private categoryService: CategoryService, private cartService: CartService, private router: Router) { }

  ngOnInit() {
    // Call API để lấy danh mục
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.result
    })
    // Gọi API để lấy danh sách sản phẩm
    this.productService.getAll().subscribe((data) => {
      console.log(data, "Data");
      this.products = data.result;
      console.log(this.products, "Call API");
      this.viewInitialized = true;
    });



  }

  ngAfterViewChecked() {
    // Kiểm tra nếu dữ liệu đã được load và view đã được render
    if (this.viewInitialized && this.products.length > 0) {

      // console.count("Thah")
      // this.initProductSlider();
      this.viewInitialized = false; // Đảm bảo rằng slider chỉ được khởi tạo một lầ // Truy vấn DOM sau khi view đã render
      const listProduct = document.querySelector('.list-products2') as HTMLElement;
      const products = document.querySelectorAll('.list-products2 .product2') as NodeListOf<HTMLElement>;
      const lengthProducts = products.length - 1;

      let currentIndex: number = 0;

      console.log(products.length, 'length');
      if (products.length > 0) {
        let itemWidth: number = products[0].offsetWidth + 20;
        function updateSliderCart1() {
          return listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
        document.querySelector('.next')?.addEventListener('click', function () {
          currentIndex = (currentIndex === lengthProducts) ? 0 : currentIndex + 1
          updateSliderCart1()
        });
        document.querySelector('.prev')?.addEventListener('click', function () {
          currentIndex = (currentIndex === 0) ? lengthProducts : currentIndex - 1
          updateSliderCart1()
        });
      } else {

        console.error('Không tìm thấy sản phẩm');
        return;
      }
      // document.querySelector('.next')?.addEventListener('click', function () {
      //   if (currentIndex < products.length - 2) {
      //     currentIndex++;
      //   } else {
      //     currentIndex = 0; // Quay lại từ đầu nếu đã ở cuối danh sách
      //   }

      // });

      // document.querySelector('.prev')?.addEventListener('click', function () {
      //   if (currentIndex > 0) {
      //     currentIndex--;
      //   } else {
      //     currentIndex = products.length - 1; // Quay lại cuối danh sách nếu đã ở đầu
      //   }
      //   listProduct.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      // });
    }
  }
  addToCart(id: string) {
    console.log(id, "<<<<");
    const userExist = localStorage.getItem('user');
    const user = userExist ? JSON.parse(userExist) : '';
    if (user && id) {
      const userId = user._id;
      const productId = id;
      const data = { productId, userId };
      this.cartService.add(data).subscribe((res: any) => {
        if (res) {
          this.userSessionService.setSessionCart(res.result2); // Cập nhật giỏ hàng
          console.log('Res', res);
          alert('Đã thêm');
        }
      });
    }
  }


}
