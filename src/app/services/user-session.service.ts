import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private cartSubject = new BehaviorSubject<any[]>(this.getInitialCart());
  cart$ = this.cartSubject.asObservable();

  constructor(private cartService: CartService) { }

  getInitialCart(): any[] {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  }


  setSessionCart(cart: any[]) {
    if (Array.isArray(cart)) {
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartSubject.next(cart); // Phát sự kiện khi giỏ hàng thay đổi
    } else {
      console.warn('Invalid cart data. Expected an array.');
    }
  }
  getData() {
    this.cartService.getAll().subscribe((res: any) => {
      if (res) {
        console.log("response from cart: ", res.cart)
        this.setSessionCart(res.cart)
      }
    })
  }


  clearSessionCart() {
    localStorage.removeItem('cart');
    this.cartSubject.next([]);
  }
}
