import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UserSessionService } from 'src/app/services/user-session.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public carts: any = [];
  constructor(private userSessionService: UserSessionService, private header: HeaderComponent, private cartService: CartService, private productService: ProductsService) { }


  ngOnInit() {
    this.initCart();
  }
  initCart() {
    const getCarts: any = this.userSessionService.getInitialCart();
    console.log('cart', getCarts);

    if (getCarts && getCarts.length > 0) {
      const requests = getCarts.map((item: any) => {
        console.log("item", item);
        return this.productService.get(item.productId).pipe(
          map(data => {
            console.log("hello cac ban. Minh la Thanh day");
            console.log('data result', data.result);
            return { ...data.result, ordered: `${Number(item.quantity)}` }; // Thêm thuộc tính mới
          })
        );
      });

      // Sử dụng forkJoin để chờ tất cả các yêu cầu hoàn thành
      forkJoin(requests).subscribe((results: any) => {
        this.carts = []
        this.carts.push(...results); // Thêm tất cả kết quả vào mảng carts
        console.warn("carts: ", this.carts); // In ra giá trị của carts sau khi đã cập nhật
      });
    }
  }
  removeItem(id: string) {
    this.cartService.delete(id).subscribe((res) => {
      if (res) {
        console.log("Ressss:", res);

        // Xóa sản phẩm khỏi local storage
        let currentCart = this.userSessionService.getInitialCart();
        currentCart = currentCart.filter((item: any) => item.productId !== id);
        this.userSessionService.setSessionCart(currentCart);

        // Xóa sản phẩm khỏi mảng carts mà không reload lại trang
        this.carts = this.carts.filter((item: any) => item._id !== id);

        // Gọi cập nhật header
        this.header.updateCart();

        alert("Xoá thành công");
      }
    });
  }
  // ngAfterViewChecked(): void {
  //   const $ = document.querySelector.bind(document);
  //   const $$ = document.querySelectorAll.bind(document);

  //   // Call API
  //   // User
  //   const currentUser: any[] = JSON.parse(localStorage.getItem('users') || '[]');
  //   const rightHeader: HTMLElement | null = document.querySelector(".right-header");

  //   if (currentUser) {
  //     currentUser.forEach((item: any) => {
  //       if (item.isAuthenticated) {
  //         if (rightHeader) {
  //           rightHeader.innerHTML = `
  //             <a href="#" class="blog" title="Blog">
  //               <img src="../img/iconBlog.webp" alt="">
  //               <span>Blog</span>
  //             </a>
  //             <a href="../src/sale.html" class="blog" title="Khuyến mãi">
  //               <img src="../img/give.webp" alt="">
  //               <span>Khuyến mãi</span>
  //             </a>
  //             <a data-cart-counter="0" href="../src/cart.html" class="blog cart" title="Giỏ hàng">
  //               <img src="https://theme.hstatic.net/200000467803/1000988268/14/icon-cart.svg?v=435" alt="">
  //               <span>Giỏ hàng</span>
  //             </a>
  //             <div class="blog login dropdown" title="Đăng nhập">
  //               <img src="https://demoda.vn/wp-content/uploads/2022/02/anh-anh-da-den-cuoi.jpg" alt="">
  //               <span style="color: #51b848;">${item.firstname}</span>
  //               <div class="dropdown-content">
  //                 <a href="#">Profile</a>
  //                 <a href="#">Setting</a>
  //                 <a href="#" onclick="signOut()">Sign out</a>
  //               </div>
  //             </div>
  //           `;
  //         }
  //       }
  //     });
  //   }

  //   let listProduct: any[] = JSON.parse(localStorage.getItem('product') || '[]');

  //   const sum = (): void => {
  //     const subtotal = $('.info-subtotal span') as HTMLElement;
  //     const sale = $('.info-sale span') as HTMLElement;
  //     const payment = $('.info-total span') as HTMLElement;
  //     let priceSale = 0;
  //     let totalPrice = listProduct.reduce((acc, curr) => {
  //       acc += curr.priceNew === 0 ? curr.total : (curr.priceOld * curr.quantity);
  //       priceSale -= curr.priceNew === 0 ? 0 : (curr.total - (curr.priceOld * curr.quantity));
  //       return acc;
  //     }, 0);

  //     subtotal.innerHTML = totalPrice.toLocaleString('en-US') + '₫';
  //     sale.innerHTML = `${priceSale.toLocaleString('en-US') + '₫'}`;
  //     payment.innerHTML = (totalPrice - priceSale).toLocaleString('en-US') + '₫';
  //   };

  //   sum();

  //   const setLocal = (): void => {
  //     localStorage.setItem('product', JSON.stringify(listProduct));
  //   };

  //   const countProduct = (): void => {
  //     const rightHeader = document.querySelector('.right-header a:nth-child(3)') as HTMLElement;
  //     const titleCart = document.querySelector('.title-cart') as HTMLElement;

  //     if (listProduct.length > 0) {
  //       titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
  //       rightHeader.setAttribute('data-cart-counter', `${listProduct.length}`);
  //       const counter = $('.count') as HTMLElement;
  //       counter.style.display = 'inline-block';
  //     } else {
  //       titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
  //       rightHeader.setAttribute('data-cart-counter', '0');
  //       const counter = $('.count') as HTMLElement;
  //       counter.style.display = 'none';
  //     }
  //   };

  //   function updateProductList(): void {
  //     const componentLeft = document.querySelector('.component-left') as HTMLElement;
  //     const result = listProduct.map((item, index) => {
  //       return `
  //         <div class="cart-item">
  //           <div class="component-product">
  //             <div class="product_check">
  //               <input type="checkbox" name="" id="" data-price="" data-quantity="">
  //             </div>
  //             <div class="product_image">
  //               <a href="#">
  //                 <img src="${item.image}" alt="">
  //               </a>
  //             </div>
  //             <div class="product_info" data-id="${item.id}">
  //               <div onclick="removeItem(${index})" class="item_remove">
  //                 <span>&times;</span>
  //               </div>
  //               <div class="product-relative">
  //                 <a href="" title="">${item.name}</a>
  //                 <p class="cart-color-item"></p>
  //                 <div class="price-prd">
  //                   <span>${item.priceNew.toLocaleString('en-US')}đ</span>
  //                   <del class="${item.priceOld == null ? 'none' : ''}">${item.priceOld != null ? item.priceOld.toLocaleString('en-US') : ''}đ</del>
  //                 </div>
  //               </div>
  //               <div onclick="clickUpdateQuantity(event)" class="select-quantity">
  //                 <div class="button-minus">-</div>
  //                 <input onchange="handleInput(this, ${item.id})" id="two-input" value="${item.quantity}" min="1" aria-valuemax="50" type="number" name="" class="product-quantity">
  //                 <div class="button-maxnus">+</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       `;
  //     });

  //     componentLeft.innerHTML = result.join('');
  //     const rightComponent = document.querySelector('.component-right') as HTMLElement;
  //     rightComponent.style.display = listProduct.length > 0 ? 'block' : 'none';

  //     countProduct();
  //     sum();

  //     if (listProduct.length <= 0) {
  //       componentLeft.style.margin = '0 auto';
  //       componentLeft.innerHTML = `
  //         <div class="cart-empty">
  //           <p class="text-empty">Không có sản phẩm nào trong giỏ hàng</p>
  //           <div class="cart-empty-btn">
  //             <a href="../index.html" title="Trang chủ">
  //               <div class="checkout">Tiếp tục mua hàng <ion-icon style="font-size: 24px; margin-left: 5px;" name="cart-outline"></ion-icon></div>
  //             </a>
  //           </div>
  //         </div>
  //       `;
  //     }
  //   }

  //   const clickUpdateQuantity = (event: Event): void => {
  //     if (listProduct.length > 0) {
  //       const isPlusButton = (event.target as HTMLElement).classList.contains('button-maxnus');
  //       const isMinusButton = (event.target as HTMLElement).classList.contains('button-minus');
  //       const productInfo = (event.target as HTMLElement).closest('.product_info') as HTMLElement;

  //       if (isMinusButton || isPlusButton) {
  //         for (let i = 0; i < listProduct.length; i++) {
  //           if (listProduct[i].id == productInfo.dataset.id) {
  //             if (isPlusButton) {
  //               listProduct[i].quantity += 1;
  //               setLocal();
  //             } else if (isMinusButton) {
  //               listProduct[i].quantity -= 1;
  //               setLocal();
  //               if (listProduct[i].quantity === 0) {
  //                 removeItem(i);
  //               }
  //             }
  //             listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity;
  //             setLocal();
  //             updateProductList();
  //           }
  //         }
  //       }
  //     }
  //   };

  //   updateProductList();

  //   const handleInput = (element: HTMLInputElement, productID: number): void => {
  //     const getValue = +element.value;

  //     for (let i = 0; i < listProduct.length; i++) {
  //       if (listProduct[i].id === productID) {
  //         listProduct[i].quantity = getValue;
  //         setLocal();
  //         listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity;
  //         setLocal();
  //         updateProductList();
  //         return;
  //       }
  //     }
  //   };

  //   const btnCheckOut = document.querySelector(".summary-checkout") as HTMLElement;
  //   btnCheckOut.onclick = () => {
  //     window.location.href = "./checkout.html";
  //   };

  //   const removeItem = (i: number): void => {
  //     listProduct.splice(i, 1);
  //     setLocal();
  //     countProduct();
  //     updateProductList();
  //   };
  // }


}
