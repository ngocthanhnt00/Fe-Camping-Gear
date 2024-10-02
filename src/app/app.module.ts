import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuperComponent } from './components/super/super.component';
import { CategoryService } from './services/category.service';
import { ProductsService } from './services/products.service';
import { PageAdminComponent } from './components/admin/pageAdmin/pageAdmin.component';
import { SanPhamComponent } from './components/admin/san-pham/san-pham.component';
import { DanhMucComponent } from './components/admin/danh-muc/danh-muc.component';
import { LandingpageComponent } from './components/admin/landingpage/landingpage.component';
// Cấu hình tuỳ chọn của JWT
//  Dùng để giải mã (decode)
// kiểm expire của token
// Trích xuất thông tin từ token
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'super', component: SuperComponent },
  { path: 'admin', component: PageAdminComponent, },
  { path: 'admin1', component: DanhMucComponent, },
  { path: 'admin2', component: SanPhamComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    PageAdminComponent,
    ProductDetailComponent,
    DanhMucComponent,
    SanPhamComponent,
    SuperComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CategoryService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    JwtHelperService,
    ProductsService,
    LoginComponent,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
