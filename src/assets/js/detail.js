
const currentUser = JSON.parse(localStorage.getItem('users')) || [];
const rightHeader = document.querySelector(".right-header");
if (currentUser) {
  currentUser.forEach((item, index) => {
    if (item.isAuthenticated) {
      rightHeader.innerHTML = `    <a href="#" class="blog" title="Blog">
            <img src="../img/iconBlog.webp" alt="">
            <span>Blog</span>
        </a>
        <a href="./sale.html" class="blog" title="Khuyến mãi">
            <img src="../img/give.webp" alt="">
            <span>Khuyến mãi</span>
        </a>
        <a data-cart-counter="0" href="../src/cart.html" class="blog cart" title="Giỏ hàng">
            <img src="https://theme.hstatic.net/200000467803/1000988268/14/icon-cart.svg?v=435" alt="">
            <span>Giỏ hàng</span>
        </a>
        <div class="blog login dropdown" title="Đăng nhập">
            <img src="https://demoda.vn/wp-content/uploads/2022/02/anh-anh-da-den-cuoi.jpg" alt="">
            <span style="color: #51b848;">${item.firstname}</span>
                <div class="dropdown-content">
                    <a href="#">Profile</a>
                    <a href="#">Setting</a>
                    <a href="#" onclick="signOut()">Sign out</a>
                </div>
        </div>
    `
    }
  })

}

const countProduct = () => {
  const arrayProduct = JSON.parse(localStorage.getItem('product')) || [];
  if (arrayProduct.length > 0) {
    let rightHeader = document.querySelector('.right-header a:nth-child(3)');
    let getValue = rightHeader.dataset.cartCounter;
    rightHeader.setAttribute('data-cart-counter', `${arrayProduct.length}`)
  }
}

setInterval(countProduct, 1)


const detailProduct = JSON.parse(localStorage.getItem("detail"));
const setLocal = () => {
  return localStorage.setItem("product", JSON.stringify(arrayProduct))
}
let arrayProduct = JSON.parse(localStorage.getItem("product")) || [];
const wrapper = document.querySelector(".wrapper");
fetch("http://localhost:2051/list-Products")
  .then((res) => res.json())
  .then((res) => {
    res.forEach(item => {
      if (detailProduct == item.id) {
        wrapper.innerHTML = `
            <div id="page-wrap">

            <div class="breadcrumb-bg hidden-xs">
                <div class="container">
                    <div class="wrapper-breadcrum">
                        <ol class="breadcrumb breadcrumb-arrow" itemscope=""
                            itemtype="http://schema.org/BreadcrumbList">
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a
                                    href="/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span>
                                    <meta itemprop="position" content="1">
                                </a></li>

                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">


                                <a href="https://fanfan.vn/collections/naturehike" target="_self" itemprop="item"><span
                                        itemprop="name">${item.brand} </span>
                                    <meta itemprop="position" content="2">
                                </a>
                            </li>
                            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"
                                class="active">
                                <a href="/products/ba-lo-xep-gon-18l-nh17a012-b" itemprop="item"><span
                                        itemprop="name">${item.name}</span>
                                    <meta itemprop="position" content="3">
                                </a>
                            </li>

                        </ol>
                    </div>
                </div>
            </div>
            <main id="product">
                <div class="container">
                    <div class="products flex-box flex-w">
                        <div class="product-img-left">
                            <div class="hidden-xs">

                                <div id="sliderproduct" class="owl-carousel owl-loaded owl-drag">































                                    <div class="owl-stage-outer">
                                        <div class="owl-stage"
                                            style="width: 7500px; transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
                                            <div class="owl-item active" style="width: 500px;"><a class="items"
                                                    data-index="0"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="${item.img}">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="1"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="2"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="3"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="4"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="5"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="6"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="7"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="8"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="9"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="10"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="11"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="12"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="13"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_1024x1024.jpg">
                                                </a></div>
                                            <div class="owl-item" style="width: 500px;"><a class="items" data-index="14"
                                                    href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg"
                                                    data-fancybox="home-gallery-images" rel="fancybox-button">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_1024x1024.jpg">
                                                </a></div>
                                        </div>
                                    </div>
                                    <div class="owl-nav disabled"><button type="button" role="presentation"
                                            class="owl-prev"><i class="fa fa-angle-left"></i></button><button
                                            type="button" role="presentation" class="owl-next"><i
                                                class="fa fa-angle-right"></i></button></div>
                                    <div class="owl-dots"><button role="button"
                                            class="owl-dot active"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button><button role="button"
                                            class="owl-dot"><span></span></button></div>
                                </div>
                                <div id="sliderproduct-sync" class="owl-carousel my-btn owl-loaded owl-drag">































                                    <div class="owl-stage-outer">
                                        <div class="owl-stage"
                                            style="width: 2259px; padding-left: 30px; padding-right: 30px; transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
                                            <div class="owl-item active current"
                                                style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item active" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item active" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item active" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item active" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_large.jpg">
                                                </div>
                                            </div>
                                            <div class="owl-item" style="width: 122.6px; margin-right: 24px;">
                                                <div class="items">
                                                    <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                        src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_large.jpg">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="owl-nav"><button type="button" role="presentation"
                                            class="owl-prev disabled"><i class="fa fa-angle-left"></i></button><button
                                            type="button" role="presentation" class="owl-next"><i
                                                class="fa fa-angle-right"></i></button></div>
                                    <div class="owl-dots disabled"></div>
                                </div>

                            </div>
                            <div class="product-tab-list flex-box">
                                <span class="active" data-id="#product-des">Mô tả sản phẩm</span>


                                <span data-id="#product-tab-1" class="">Thông số kỹ thuật</span>
                                <span data-id="#pro-review" class="">Đánh giá của khách hàng</span>
                            </div>
                            <div class="product-des-box pd-top cut_tab" id="product-des">
                                <div class="content">

                                    <div class="content-full">
                                        <p style="text-align: justify;"><strong>Ba lô xếp gọn 18L NH17A012-B</strong>
                                            với kích thước xếp gọn nằm trong lòng bàn tay, nằm gọn 1 góc trong hành lý
                                            và đồng hành cùng bạn đến bất kỳ đâu. Đây là một gợi ý hoàn hảo khi bạn đang
                                            tìm 1 chiếc balo nhỏ để mang đồ khi đi tham quan, du lịch, nhưng ngại mang
                                            theo quá nhiều balo, vali,... - Balo xếp gọn sẽ nằm gọn trong hành lý và
                                            xuất hiện lúc bạn cần. Thích hợp sử dụng khi đi du lịch, dã ngoại, đi công
                                            tác, sử dụng hằng ngày, hay để trong cốp xe và sử dụng ngay khi cần.</p>
                                        <p style="text-align: center;"><img
                                                src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_grande.jpg">
                                        </p>
                                        <p style="text-align: center;"><em>Balo du lịch nhỏ - gọn - nhẹ</em></p>
                                        <p style="text-align: center;"><img
                                                src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_grande.jpg">
                                        </p>
                                        <p style="text-align: center;"><em>Không gian chứa đồ phù hợp cho các hoạt động
                                                du lịch, công tác hay sử dụng hằng ngày</em></p>
                                        <div style="text-align: justify;">Chiếc balo xếp nhỏ gọn thiết kế với đầy đủ các
                                            ngăn, có ngăn chứa chai nước và các ngăn nhỏ để sắp xếp đồ bên trong. Ba lô
                                            sử dụng chất liệu vải 30D&nbsp;với khả năng kháng nước, có thể sử dụng balo
                                            dưới thời tiết ẩm ướt, mưa nhỏ, nếu mưa lớn nước có thể ngấm qua đường may
                                            (Chỉ nên sử dụng với thời gian ngắn) hoặc sử dụng các biện pháp chống nước
                                            khác như là áo mưa cho balo.</div>
                                        <div style="text-align: justify;">&nbsp;</div>
                                        <div style="text-align: center;"><img
                                                src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_grande.jpg">
                                        </div>
                                        <div style="text-align: center;"><em>Balo kháng nước sử dụng dưới thời tiết mưa
                                                nhỏ</em></div>
                                        <div style="text-align: center;"><img
                                                src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_grande.jpg">
                                        </div>
                                        <div style="text-align: center;"><em>Quai đeo thoáng khí, chắc chắn</em></div>
                                        <div style="text-align: justify;">Thông số sản phẩm:</div>
                                        <ul>
                                            <li style="text-align: justify;">Chất liệu: Vải Nylon 30D</li>
                                            <li style="text-align: justify;">Thể tích: 18L</li>
                                            <li style="text-align: justify;">Kích thước sử dụng: ~ 23 x 17 x 42 cm</li>
                                            <li style="text-align: justify;">Kích thước xếp gọn: ~ 7 x 5 x 12 cm</li>
                                            <li style="text-align: justify;">Khối lượng: 120g</li>
                                            <li style="text-align: justify;">Bảo hành: Tham khảo&nbsp;<u><strong><a
                                                            href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike"><span
                                                                style="color:#3498db">Chính sách bảo hành
                                                                Naturehike</span></a></strong></u></li>
                                            <li style="text-align: justify;">Xuất xứ: China</li>
                                        </ul>
                                        <div style="text-align: center;">
                                            <p style="text-align: center">&nbsp;</p>
                                            <p style="text-align: center"><img
                                                    src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_grande.jpg">
                                            </p>
                                            <p style="text-align: center"><strong>HƯỚNG DẪN GẤP BALO</strong></p>
                                            <p style="text-align: center"><img
                                                    src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_grande.jpg">
                                            </p>
                                            <p style="text-align: center">&nbsp;</p>
                                            <p style="text-align: center">&nbsp;</p>
                                            <p style="text-align: center">&nbsp;</p>
                                            <p>&nbsp;</p>
                                        </div>
                                    </div>



                                </div>
                            </div>



                            <div class="product-des-box cut_tab" id="product-tab-1">
                                <div class="title-tab">Thông số kỹ thuật</div>
                                <div class="content">
                                    <div class="content-full">
                                        <table style="height: 244px; width: 100%;">
                                            <tbody>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Phù hợp cho</td>
                                                    <td style="height: 18px; width: 327.955px;">Du lịch, dã ngoại, những
                                                        chuyến đi trong ngày</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Kích thước</td>
                                                    <td style="height: 18px; width: 327.955px;">23 x 17 x 42 cm (Ngang x
                                                        rộng x cao)</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Kích thước xếp</td>
                                                    <td style="height: 18px; width: 327.955px;">7 x 5 x 12 cm (Dài x
                                                        đường kính)</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="width: 130.653px; height: 18px;">Thể tích</td>
                                                    <td style="width: 327.955px; height: 18px;">18L</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Khối lượng</td>
                                                    <td style="height: 18px; width: 327.955px;">180g</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Chất liệu</td>
                                                    <td style="height: 18px; width: 327.955px;">Vải 30D Nylon</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Màu</td>
                                                    <td style="height: 18px; width: 327.955px;">Xanh dương (Blue); Đen
                                                        (Black); Xám (Grey)</td>
                                                </tr>
                                                <tr style="height: 64px;">
                                                    <td style="height: 64px; width: 130.653px;">Tính năng đặc biệt</td>
                                                    <td style="height: 64px; width: 327.955px;">
                                                        <ul>
                                                            <li>Xếp gọn</li>
                                                            <li>Chống thấm PU2000+</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Đi kèm</td>
                                                    <td style="height: 18px; width: 327.955px;">-</td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Bảo hành</td>
                                                    <td style="height: 18px; width: 327.955px;">Tham
                                                        khảo&nbsp;<u><strong><a
                                                                    href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike"
                                                                    data-cke-saved-href="https://fanfan.vn/pages/chinh-sach-bao-hanh-naturehike">Chính
                                                                    sách bảo hành Naturehike</a></strong></u></td>
                                                </tr>
                                                <tr style="height: 18px;">
                                                    <td style="height: 18px; width: 130.653px;">Xuất xứ</td>
                                                    <td style="height: 18px; width: 327.955px;">China</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                            <div class="starbap-box product-des-box cut_tab" id="pro-review">
                                <div class="title-tab">Đánh giá của khách hàng</div>
                                <div style="clear:both"></div>
                                <div id="startbap_product_reviews" class="starbap-widget starbap-review-widget"
                                    data-product-title="${item.name}"
                                    data-url="/products/ba-lo-xep-gon-18l-nh17a012-b"
                                    data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg"
                                    data-id="1045430052" data-customer=" ">

                                    <div style="clear:both"></div>
                                    <div class="starbap-rev-widg__header">
                                        <h2 class="starbap-rev-widg__title">Đánh giá sản phẩm</h2>
                                        <div class="starbap-rev-widg__summary">
                                            <div class="starbap-rev-widg__summary-stars"><a
                                                    class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                        style="color:#51b848!important"></i></a><a
                                                    class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                        style="color:#51b848!important"></i></a><a
                                                    class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                        style="color:#51b848!important"></i></a><a
                                                    class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                        style="color:#51b848!important"></i></a><a
                                                    class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                        style="color:#51b848!important"></i></a></div>
                                            <div class="starbap-rev-widg__summary-text">Dựa trên 0 đánh giá</div>
                                        </div><a href="#" class="starbap-ask-question-btn">Đặt câu hỏi</a><a href="#"
                                            class="starbap-write-rev-link">Viết đánh giá</a>
                                        <div class="starbap-rev__br"></div>
                                        <div class="starbap-form-wrapper" style="display:none;">
                                            <form class="starbap-form" novalidate="novalidate">
                                                <div class="starbap-form__name-fieldset"> <label>Tên</label> <input
                                                        name="reviewer_name" type="text" placeholder="Nhập tên của bạn">
                                                </div>
                                                <div class="starbap-form__email-fieldset"> <label>Email</label> <input
                                                        name="reviewer_email" type="email" required=""
                                                        placeholder="hi@example.com" aria-required="true"> </div>
                                                <div class="starbap-form__phone-fieldset"> <label>Số điện thoại</label>
                                                    <input name="reviewer_phone" type="phone"
                                                        placeholder="Nhập số điện thoại của bạn" aria-required="true">
                                                </div>
                                                <div class="starbap-form__rating-fieldset"> <label>Đánh giá</label>
                                                    <div class="rating-stars text-left">
                                                        <ul id="stars">
                                                            <li class="star selected" title="Poor" data-value="1"><i
                                                                    class="fa fa-star fa-fw"></i></li>
                                                            <li class="star selected " title="Fair" data-value="2"><i
                                                                    class="fa fa-star fa-fw"></i></li>
                                                            <li class="star selected" title="Good" data-value="3"><i
                                                                    class="fa fa-star fa-fw"></i></li>
                                                            <li class="star selected" title="Excellent" data-value="4">
                                                                <i class="fa fa-star fa-fw"></i>
                                                            </li>
                                                            <li class="star selected" title="WOW!!!" data-value="5"><i
                                                                    class="fa fa-star fa-fw"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="starbap-form__title-fieldset"> <label>Tiêu đề đánh
                                                        giá</label><span class="starbap-countdown"></span> <input
                                                        name="review_title" type="text"
                                                        placeholder="Nhập tiêu đề đánh giá của bạn"> </div>
                                                <div class="starbap-form__body-fieldset"> <label>Nội dung</label><span
                                                        class="starbap-countdown"></span><textarea rows="5"
                                                        name="review_body"
                                                        placeholder="Viết nội dung đánh giá của bạn"></textarea> </div>
                                                <div class="starbap-custom-forms"></div>
                                                <div class="starbap-form-video__fieldset"><label
                                                        class="starbap-picture-fieldset-title">Link video (không bắt
                                                        buộc)</label><input name="review_video" type="text"
                                                        placeholder="Nhập link youtube video của bạn"></div>
                                                <div class="starbap-form__picture-fieldset"><label
                                                        class="starbap-picture-fieldset-title">Hình ảnh (không bắt
                                                        buộc)</label>
                                                    <div class="starbap-picture-fieldset">
                                                        <div
                                                            class="starbap-picture-fieldset__container starbap-media-fieldset__container">
                                                            <label
                                                                class="starbap-picture-fieldset__box starbap-picture-fieldset__box--input">
                                                                <div class="starbap-picture-fieldset__box-wrapper">
                                                                    <div
                                                                        class="starbap-picture-fieldset__icon starbap-photocamera-icon">
                                                                    </div>
                                                                </div><input type="file" name="pictures"
                                                                    class="starbap-picture-fieldset__input" multiple=""
                                                                    accept="image/gif,image/jpeg,image/jpg,image/png">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div><input type="submit" class="starbap-submit-rev btn btn_c button "
                                                    value="Gửi đánh giá">
                                            </form>
                                        </div>
                                        <div class="starbap-question-form-wrapper" style="display: none;">
                                            <form class="starbap-question-form">
                                                <div class="starbap-form__name-fieldset"><label>Tên</label><input
                                                        name="reviewer_name" type="text" maxlength="100" required=""
                                                        placeholder="Nhập tên của bạn"></div>
                                                <div class="starbap-form__email-fieldset"><label>Email</label><input
                                                        name="reviewer_email" type="email" required=""
                                                        placeholder="hi@example.com"></div>
                                                <div class="starbap-form__phone-fieldset"> <label>Số điện
                                                        thoại</label><input name="reviewer_phone" type="phone"
                                                        placeholder="Nhập số điện thoại của bạn" aria-required="true">
                                                </div>
                                                <div class="starbap-form__question-fieldset"><label>Nội
                                                        dung</label><textarea rows="5" name="question_content"
                                                        required="" placeholder="Viết câu hỏi của bạn"
                                                        spellcheck="false"></textarea> <input type="submit"
                                                        class="starbap-submit-question btn btn_c button "
                                                        value="Gửi câu hỏi"> </div>
                                            </form>
                                        </div>
                                        <div class="starbap-rev__br"></div>
                                    </div>
                                    <div class="starbap-subtab"><span class="starbap-subtab__name starbap--active"
                                            data-tabname="reviews">Đánh giá<span
                                                class="starbap-subtab__count">0</span></span><span
                                            class="starbap-subtab__name" data-tabname="questions">Câu hỏi &amp; trả
                                            lời<span class="starbap-subtab__count">0</span></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="product-content-right" id="detail-product">
                            <form id="add-item-form" action="#" method="post" class="variants clearfix"
                                data-title="Ba lô xếp gọn 18L Naturehike NH17A012-B">
                                <div class="flex-box align-c justify-s">
                                    <div class="product-vendor">
                                        <a href="/collections/naturehike" title="${item.brand}">${item.brand}</a>
                                    </div>
                                    <div class="product-sku">SKU: <span>NH17A012-B-GY10</span></div>
                                </div>
                                <div class="product-title">
                                    <h1>${item.name}</h1>
                                </div>
                                <div class="starbaprv-widget starbaprv-preview-badge" data-id="1045430052"
                                    data-url="ba-lo-xep-gon-18l-nh17a012-b">

                                    <div class="starbap-prev-badge" data-average-rating="0" data-number-of-reviews="0">
                                        <a class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                style="color:#51b848!important"></i></a><a
                                            class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                style="color:#51b848!important"></i></a><a
                                            class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                style="color:#51b848!important"></i></a><a
                                            class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                style="color:#51b848!important"></i></a><a
                                            class="starbap-star starbap--off"><i class="fa fa-star fa-fw"
                                                style="color:#51b848!important"></i></a><span
                                            class="starbap-prev-badgetext">0 đánh giá</span>
                                    </div>
                                </div>
                                <div class="product-price flex-box align-c" id="price-preview">

                                    <label class="${item.priceOld == null ? "none" : ""}">-10% </label>

                                    <span>${item.priceNew}₫</span>

                                    <del class="${item.priceOld == null ? "none" : ""}">${item.priceOld}₫</del>

                                </div>
                                <div class="line"></div>
                                <div class="visible-xs">
                                    <div id="sliderproduct-mb" class="owl-carousel owl-loaded owl-drag">































                                        <div class="owl-stage-outer">
                                            <div class="owl-stage"
                                                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
                                                <div class="owl-item"><a class="items" data-index="0"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="1"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="2"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="3"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="4"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="5"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="6"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="7"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="8"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="9"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="10"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="11"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="12"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="13"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_1024x1024.jpg">
                                                    </a></div>
                                                <div class="owl-item"><a class="items" data-index="14"
                                                        href="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg"
                                                        data-fancybox="home-gallery-images" rel="fancybox-button">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_1024x1024.jpg">
                                                    </a></div>
                                            </div>
                                        </div>
                                        <div class="owl-nav disabled"><button type="button" role="presentation"
                                                class="owl-prev"><i class="fa fa-angle-left"></i></button><button
                                                type="button" role="presentation" class="owl-next"><i
                                                    class="fa fa-angle-right"></i></button></div>
                                        <div class="owl-dots"><button role="button"
                                                class="owl-dot active"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button><button role="button"
                                                class="owl-dot"><span></span></button></div>
                                    </div>
                                    <div id="sliderproduct-mb-sync" class="owl-carousel my-btn owl-loaded owl-drag">































                                        <div class="owl-stage-outer">
                                            <div class="owl-stage"
                                                style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_large.jpg">
                                                    </div>
                                                </div>
                                                <div class="owl-item">
                                                    <div class="items">
                                                        <img alt="Ba lô xếp gọn 18L Naturehike NH17A012-B"
                                                            src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_large.jpg">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="owl-nav"><button type="button" role="presentation"
                                                class="owl-prev disabled"><i
                                                    class="fa fa-angle-left"></i></button><button type="button"
                                                role="presentation" class="owl-next"><i
                                                    class="fa fa-angle-right"></i></button></div>
                                        <div class="owl-dots disabled"></div>
                                    </div>
                                </div>


                                <div class="select clearfix">
                                    <div class="selector-wrapper"><label>Màu sắc</label><span
                                            class="custom-dropdown custom-dropdown--white"><select
                                                class="single-option-selector custom-dropdown__select custom-dropdown__select--white"
                                                data-option="option1" id="product-select-option-0">
                                                <option value="Grey">Grey</option>
                                                <option value="Black">Black</option>
                                                <option value="Blue">Blue</option>
                                            </select></span></div><select id="product-select" class="product-select"
                                        name="id" style="display:none;">

                                        <option data-available="true"
                                            data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg"
                                            value="1100389534">Grey - 235,800₫</option>

                                        <option data-available="true"
                                            data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg"
                                            value="1100389535">Black - 235,800₫</option>

                                        <option data-available="true"
                                            data-img="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg"
                                            value="1100389536">Blue - 235,800₫</option>

                                    </select>
                                </div>

                                <div class="select-swatch clearfix ">



















                                    <div id="variant-swatch-0" class="swatch clearfix" data-option="option1"
                                        data-option-index="0">
                                        <div class="labelhome">Chọn Màu sắc
                                            <div class="error-block">
                                                <span>Vui lòng chọn Màu sắc</span>
                                            </div>
                                        </div>
                                        <div class="select-swap">





























































                                            <div data-value="Grey" class="n-sd swatch-element color grey  ">
                                                <input class="variant-0" id="swatch-0-grey" type="radio" name="option1"
                                                    value="Grey" data-vhandle="grey" checked="">


                                                <label class="grey" for="swatch-0-grey">
                                                    <span
                                                        style="background-image: url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582_small.jpg);background-repeat: no-repeat;background-size: 45px 100%;padding-left: 50px;font-size: 14px;">Grey</span>
                                                </label>

                                            </div>





























































                                            <div data-value="Black" class="n-sd swatch-element color black  ">
                                                <input class="variant-0" id="swatch-0-black" type="radio" name="option1"
                                                    value="Black" data-vhandle="black">


                                                <label class="black" for="swatch-0-black">
                                                    <span
                                                        style="background-image: url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce_small.jpg);background-repeat: no-repeat;background-size: 45px 100%;padding-left: 50px;font-size: 14px;">Black</span>
                                                </label>

                                            </div>





























































                                            <div data-value="Blue" class="n-sd swatch-element color blue  ">
                                                <input class="variant-0" id="swatch-0-blue" type="radio" name="option1"
                                                    value="Blue" data-vhandle="blue">


                                                <label class="blue" for="swatch-0-blue">
                                                    <span
                                                        style="background-image: url(http://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987_small.jpg);background-repeat: no-repeat;background-size: 45px 100%;padding-left: 50px;font-size: 14px;">Blue</span>
                                                </label>

                                            </div>


                                        </div>
                                    </div>





                                </div>
                                <div class="select-quantity flex-box align-c justify-s">
                                    <span>Số lượng</span>
                                    <div class="box_qty clearfix" data-price="" data-id="" onclick="clickUpdateQuantiy(event)">
                                        <input type="button" value="−" class="qty-btn btn-minus">
                                        <input type="text" id="quantity" name="quantity" value="1" min="1"
                                            class="quantity-selector" onchange="handleInput(this, ${item.id})">
                                        <input type="button" value="+" class="qty-btn btn-maxnus">
                                    </div>
                                </div>

                                <div class="combo-info hide">
                                    <h3 class="combo-info--title">Ưu đãi khi mua cùng</h3>
                                </div>
                                <div class="actions-btn clearfix">
                                    <button id="add-to-cart" data-form="#add-item-form" class="btn-cart btn-hover">
                                        Thêm vào giỏ
                                    </button>
                                </div>



                                <ul class="list-img hidden">
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__2__86d153ba2e8f498ca654e27a9e904832.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__4__24d5c31637de469c9b6af56d7eba2558.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__3__dea741ff5a2a4c08ab94258089b31557.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__5__281ee7f5eebf4a0392d055fc1358e9e5.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__10__126820d1e87f4e6aab32468bec4ce9fa.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__9__892f5219504a419e98dad78ea558370b.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__6__502deaebbece4293bf9a505ec95dd932.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__7__9297f74ab75340c59db80fada7d7bceb.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__8__31dec2933f634da590083eb6905ebf14.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__13__00ac5eb738ce42fcabb5c5ff3a97e8ab.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__12__be747506deb245b9984027a39c239b5d.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__11__ed95deb0fd9f4165b7a66198ada0aa4a.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__1__d777046f9a384575ad9f12a3ade38582.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__14__60af1724c1374ab7b2fdb0b3efddd7ce.jpg
                                    </li>
                                    <li>https://product.hstatic.net/200000467803/product/fanfan-ba-lo-xep-gon-18l-nh17a012-b-__15__7eaeefffd2ba4f5cb790e83fa87a0987.jpg
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </main>



            <div id="product-related-box">
                <div class="container">


                    <div class="related-title">Sản phẩm tương tự</div>
                    <div class="index-product-owl owl-carousel my-btn2 owl-loaded owl-drag">




















                        <div class="owl-stage-outer">
                            <div class="owl-stage"
                                style="width: 2985px; transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;">
                                <div class="owl-item active" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/am-dun-nuoc-da-ngoai-naturehike-nh17c020-h"
                                                    class="product-image has-effect">
                                                    <img class=" ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-am-dun-nuoc-da-ngoai-naturehike-20_0063489_36cfa5aefee54b4fb811f1fc0622ee6c_large.jpeg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-am-dun-nuoc-da-ngoai-naturehike-20_0063489_36cfa5aefee54b4fb811f1fc0622ee6c_large.jpeg"
                                                        alt="Ấm đun nước dã ngoại Naturehike NH17C020-H">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-am-dun-nuoc-da-ngoai-naturehike-18_0063487_72f9a3b4b3724d74841e9950ad8ea96a_large.jpeg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-am-dun-nuoc-da-ngoai-naturehike-18_0063487_72f9a3b4b3724d74841e9950ad8ea96a_large.jpeg"
                                                        alt="Ấm đun nước dã ngoại Naturehike NH17C020-H">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/am-dun-nuoc-da-ngoai-naturehike-nh17c020-h">Ấm
                                                            đun nước dã ngoại Naturehike NH17C020-H</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131685"
                                                    data-url="am-dun-nuoc-da-ngoai-naturehike-nh17c020-h">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">294,300₫ - 359,100₫</p>

                                                    <p class="old-price"><s>327,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ao-ghi-le-da-ngoai-naturehike-nh20fs007"
                                                    class="product-image has-effect">
                                                    <img class=" lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/nfan-ao-ghi-le-da-ngoai-naturehike-nh20fs007-20-gi1sblt2rukdsh0ynavyga_9af78e4899ee403aae33657f1cf44896_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/nfan-ao-ghi-le-da-ngoai-naturehike-nh20fs007-20-gi1sblt2rukdsh0ynavyga_9af78e4899ee403aae33657f1cf44896_large.png"
                                                        alt="Áo ghi lê dã ngoại Naturehike NH20FS007">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/nfan-ao-ghi-le-da-ngoai-naturehike-nh20fs007-16-6rg0f4x7_e-eldgjltftpq_c97bee7bf04943eeb96f87a14928b8d1_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/nfan-ao-ghi-le-da-ngoai-naturehike-nh20fs007-16-6rg0f4x7_e-eldgjltftpq_c97bee7bf04943eeb96f87a14928b8d1_large.png"
                                                        alt="Áo ghi lê dã ngoại Naturehike NH20FS007">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/ao-ghi-le-da-ngoai-naturehike-nh20fs007">Áo
                                                            ghi lê dã ngoại Naturehike NH20FS007</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131775"
                                                    data-url="ao-ghi-le-da-ngoai-naturehike-nh20fs007">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">898,200₫</p>

                                                    <p class="old-price"><s>998,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ao-giu-nhiet-body-nam-q-a9-naturehike-nh19fs024"
                                                    class="product-image has-effect">
                                                    <img class=" lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/giu-nhiet-body-nam-q-a9-naturehike-nh19fs024-10-9oviw4fhv0iuj00isuawvq_58a8d3bfe1d2437a982d81a5542b5bc8_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/giu-nhiet-body-nam-q-a9-naturehike-nh19fs024-10-9oviw4fhv0iuj00isuawvq_58a8d3bfe1d2437a982d81a5542b5bc8_large.png"
                                                        alt="Áo giữ nhiệt body nam Q-A9 Naturehike NH19FS024">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/giu-nhiet-body-nam-q-a9-naturehike-nh19fs024-08--v3ipywfxewdrrqlnqlxba_9d895cafada140668dc500d39837ffa6_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/giu-nhiet-body-nam-q-a9-naturehike-nh19fs024-08--v3ipywfxewdrrqlnqlxba_9d895cafada140668dc500d39837ffa6_large.png"
                                                        alt="Áo giữ nhiệt body nam Q-A9 Naturehike NH19FS024">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a
                                                            href="/products/ao-giu-nhiet-body-nam-q-a9-naturehike-nh19fs024">Áo
                                                            giữ nhiệt body nam Q-A9 Naturehike NH19FS024</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131625"
                                                    data-url="ao-giu-nhiet-body-nam-q-a9-naturehike-nh19fs024">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">323,100₫</p>

                                                    <p class="old-price"><s>359,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item active" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ao-khoac-croptop-nu-chong-uv-naturehike-nh21fs027"
                                                    class="product-image has-effect">
                                                    <img class=" lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/croptop-nu-chong-tia-uv-naturehike-nh21fs027-20-wcyulrh06eqprcf8uunzkq_d9f47761448b49929d8820adb96ace37_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/croptop-nu-chong-tia-uv-naturehike-nh21fs027-20-wcyulrh06eqprcf8uunzkq_d9f47761448b49929d8820adb96ace37_large.png"
                                                        alt="Áo khoác croptop nữ chống UV Naturehike NH21FS027">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/croptop-nu-chong-tia-uv-naturehike-nh21fs027-15-ib_wifobu02immpnhfl_pa_b5b68c031829435c917f2a51c0b74ddc_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/croptop-nu-chong-tia-uv-naturehike-nh21fs027-15-ib_wifobu02immpnhfl_pa_b5b68c031829435c917f2a51c0b74ddc_large.png"
                                                        alt="Áo khoác croptop nữ chống UV Naturehike NH21FS027">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a
                                                            href="/products/ao-khoac-croptop-nu-chong-uv-naturehike-nh21fs027">Áo
                                                            khoác croptop nữ chống UV Naturehike NH21FS027</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131454"
                                                    data-url="ao-khoac-croptop-nu-chong-uv-naturehike-nh21fs027">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">439,200₫</p>

                                                    <p class="old-price"><s>488,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ao-khoac-dai-tay-chong-tia-uv-naturehike-nh21fs025"
                                                    class="product-image has-effect">
                                                    <img class=" lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/dai-tay-nu-chong-tia-uv-naturehike-nh21fs025-20-49wkcrmo40mbho5bm-561a_9427548d5adc4066810cfac2c44089a0_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/dai-tay-nu-chong-tia-uv-naturehike-nh21fs025-20-49wkcrmo40mbho5bm-561a_9427548d5adc4066810cfac2c44089a0_large.png"
                                                        alt="Áo Khoác Dài Tay Chống Tia UV Naturehike NH21FS025">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/dai-tay-nu-chong-tia-uv-naturehike-nh21fs025-22-akdijjrls06huhzqlybpka_53cd7c2c817d449695db76fe53a2ff91_large.png"
                                                        data-src="https://product.hstatic.net/200000467803/product/dai-tay-nu-chong-tia-uv-naturehike-nh21fs025-22-akdijjrls06huhzqlybpka_53cd7c2c817d449695db76fe53a2ff91_large.png"
                                                        alt="Áo Khoác Dài Tay Chống Tia UV Naturehike NH21FS025">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a
                                                            href="/products/ao-khoac-dai-tay-chong-tia-uv-naturehike-nh21fs025">Áo
                                                            Khoác Dài Tay Chống Tia UV Naturehike NH21FS025</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131776"
                                                    data-url="ao-khoac-dai-tay-chong-tia-uv-naturehike-nh21fs025">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">719,100₫</p>

                                                    <p class="old-price"><s>799,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ba-lo-chong-nuoc-naturehike-nh21fsb04"
                                                    class="product-image has-effect">
                                                    <img class=" lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-ba-lo-chong-nuoc-naturehike-nh21fsb04-__2__31a51c7a69cf44ebbb428e4ce8ea1fa8_large.jpg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-chong-nuoc-naturehike-nh21fsb04-__2__31a51c7a69cf44ebbb428e4ce8ea1fa8_large.jpg"
                                                        alt="Ba lô chống nước Naturehike NH21FSB04">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-ba-lo-chong-nuoc-naturehike-nh21fsb04-__4__dcf6b4b231334cc29087bc3ae10f96f2_large.jpg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-chong-nuoc-naturehike-nh21fsb04-__4__dcf6b4b231334cc29087bc3ae10f96f2_large.jpg"
                                                        alt="Ba lô chống nước Naturehike NH21FSB04">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/ba-lo-chong-nuoc-naturehike-nh21fsb04">Ba lô
                                                            chống nước Naturehike NH21FSB04</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1045430141"
                                                    data-url="ba-lo-chong-nuoc-naturehike-nh21fsb04">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">536,400₫ - 621,000₫</p>

                                                    <p class="old-price"><s>596,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ba-lo-keo-cho-sup-bom-hoi-naturehike-nh19j010-b"
                                                    class="product-image has-effect">
                                                    <img class=" ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-ba-lo-vanbom-hoi-tui-dung-sup-10_0067521_0e38c31aab644b48a3d982c7b08da68d_large.jpeg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-vanbom-hoi-tui-dung-sup-10_0067521_0e38c31aab644b48a3d982c7b08da68d_large.jpeg"
                                                        alt="Ba lô kéo cho SUP bơm hơi Naturehike NH19J010-B">
                                                    <img class="hover ls-is-cached lazyloaded"
                                                        src="http://product.hstatic.net/200000467803/product/fanfan-ba-lo-vanbom-hoi-tui-dung-sup-10_0067523_93fbee99bb784ad1aa36e4cb4f04ae34_large.jpeg"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-vanbom-hoi-tui-dung-sup-10_0067523_93fbee99bb784ad1aa36e4cb4f04ae34_large.jpeg"
                                                        alt="Ba lô kéo cho SUP bơm hơi Naturehike NH19J010-B">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a
                                                            href="/products/ba-lo-keo-cho-sup-bom-hoi-naturehike-nh19j010-b">Ba
                                                            lô kéo cho SUP bơm hơi Naturehike NH19J010-B</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131247"
                                                    data-url="ba-lo-keo-cho-sup-bom-hoi-naturehike-nh19j010-b">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">1,071,000₫</p>

                                                    <p class="old-price"><s>1,190,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ba-lo-leo-nui-45l-naturehike-nh18y045-q"
                                                    class="product-image has-effect">
                                                    <img class="lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-balo-leo-nui-naturehike-45l-10_0067513_74437b368004411aa8df6c967da4db22_large.jpeg"
                                                        alt="Ba lô leo núi 45L Naturehike NH18Y045-Q">
                                                    <img class="hover lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-balo-leo-nui-naturehike-45l-09_0067517_68af9352f9094a97a7884b37a1c38df9_large.jpeg"
                                                        alt="Ba lô leo núi 45L Naturehike NH18Y045-Q">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/ba-lo-leo-nui-45l-naturehike-nh18y045-q">Ba
                                                            lô leo núi 45L Naturehike NH18Y045-Q</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040132468"
                                                    data-url="ba-lo-leo-nui-45l-naturehike-nh18y045-q">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">1,503,000₫</p>

                                                    <p class="old-price"><s>1,670,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ba-lo-leo-nui-55l-naturehike-nh16y020-q"
                                                    class="product-image has-effect">
                                                    <img class="lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-leo-nui-55l-naturehike-10_0066101_8109cb189f7d4b60a9621ee210dc77df_large.jpeg"
                                                        alt="Ba lô leo núi 55L Naturehike NH16Y020-Q">
                                                    <img class="hover lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-leo-nui-55l-naturehike-10_0066103_89dc3f56dd8b4d41b2d3883c7c704b28_large.jpeg"
                                                        alt="Ba lô leo núi 55L Naturehike NH16Y020-Q">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/ba-lo-leo-nui-55l-naturehike-nh16y020-q">Ba
                                                            lô leo núi 55L Naturehike NH16Y020-Q</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040131301"
                                                    data-url="ba-lo-leo-nui-55l-naturehike-nh16y020-q">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">1,764,900₫</p>

                                                    <p class="old-price"><s>1,961,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-item" style="width: 274.5px; margin-right: 24px;">
                                    <div class="product-loop ">
                                        <div class="regular">
                                            <div class="product-img">
                                                <div class="product-sale">-10%</div>

                                                <a href="/products/ba-lo-leo-nui-65l-naturehike-nh16y065-q"
                                                    class="product-image has-effect">
                                                    <img class="lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-leo-nui-65l-naturehike-08_0066326_64eaf0b683844de4a63a176a4939ad34_large.jpeg"
                                                        alt="Ba lô leo núi 65L Naturehike NH16Y065-Q">
                                                    <img class="hover lazyload"
                                                        src="http://theme.hstatic.net/200000467803/1000988268/14/move.png?v=712"
                                                        data-src="https://product.hstatic.net/200000467803/product/fanfan-ba-lo-leo-nui-65l-naturehike-09_0066328_688b0b9b17704324aa269d5298aafb59_large.jpeg"
                                                        alt="Ba lô leo núi 65L Naturehike NH16Y065-Q">
                                                </a>

                                            </div>
                                            <div class="product-info">
                                                <div class="product-vendor text-center">

                                                    <a href="/collections/naturehike" title="NATUREHIKE">NATUREHIKE</a>
                                                </div>
                                                <div class="product-name">
                                                    <h3><a href="/products/ba-lo-leo-nui-65l-naturehike-nh16y065-q">Ba
                                                            lô leo núi 65L Naturehike NH16Y065-Q</a></h3>
                                                </div>
                                                <div class="starbaprv-widget starbaprv-preview-badge starbaprv-preview-badge--with-link"
                                                    data-id="1040132760"
                                                    data-url="ba-lo-leo-nui-65l-naturehike-nh16y065-q">

                                                    <div class="starbap-prev-badge" data-average-rating="0"
                                                        data-number-of-reviews="0"><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><a
                                                            class="starbap-star starbap--off"><i
                                                                class="fa fa-star fa-fw"
                                                                style="color:#51b848!important"></i></a><span
                                                            class="starbap-prev-badgetext">0 đánh giá</span></div>
                                                </div>
                                                <div class="price-box">
                                                    <p class="special-price highlight">1,765,800₫</p>

                                                    <p class="old-price"><s>1,962,000₫</s></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"><i
                                    class="fa fa-angle-left"></i></button><button type="button" role="presentation"
                                class="owl-next"><i class="fa fa-angle-right"></i></button></div>
                        <div class="owl-dots disabled"></div>
                    </div>
                </div>
            </div>


        </div>
            `
      }
    })
    const btnAddCart = document.getElementById("add-to-cart");
    console.log(btnAddCart, 'THanh ne');
    btnAddCart.onclick = async function (event) {
      event.preventDefault();
      const quantityDetail = document.getElementById("quantity").value;
      let isCheck = true
      arrayProduct.filter(async (item, index) => {
        if (item.id == detailProduct) {
          isCheck = false;
          let newQty = parseInt(quantityDetail) + item.quantity;
          item.quantity = newQty
          item.total = newQty * item.priceNew
          setLocal()
          alert(`san pham da co trong gio hang`)
          console.log(arrayProduct, `not fetch`)
          return
        }

      })
      if (arrayProduct.length <= 0 || isCheck) {
        fetch("http://localhost:2051/list-Products")
          .then((res) => res.json())
          .then((res) => {
            let findProductWithID = res.filter(item => item.id == detailProduct);
            findProductWithID = findProductWithID[0]
            let priceNew = findProductWithID.priceNew.replaceAll(",", "")
            let priceOld = findProductWithID.priceOld != null ? findProductWithID.priceOld.replaceAll(",", "") : null
            let total = parseFloat(priceNew) * parseFloat(quantityDetail)
            let data = {
              id: findProductWithID.id,
              name: findProductWithID.name,
              brand: findProductWithID.brand,
              image: findProductWithID.img,
              priceNew: parseFloat(priceNew),
              priceOld: parseFloat(priceOld),
              quantity: parseFloat(quantityDetail),
              total: total,
            }
            console.log(findProductWithID)
            arrayProduct.push(data)
            setLocal()
            // window.location.reload()
            return
          })
      }

    }
  })
// console.log(data, "Sss")
// * Slider Detail Sản phẩm
// $(document).ready(function(){
//     $('.sub-img').slick({
//         slidestoShow: 4
//     });
//   });


function clickUpdateQuantiy(event) {
  let isMinusButton = event.target.classList.contains('btn-minus');
  let isPlusButton = event.target.classList.contains('btn-maxnus');
  const quantityDetail = document.getElementById("quantity");
  console.log(isPlusButton)
  if (isMinusButton || isPlusButton) {
    if (isPlusButton) {
      // Covert to Interger
      const getValue = +(quantityDetail.value)
      quantityDetail.setAttribute("value", getValue + 1)
    } else {
      if (isMinusButton) {
        const getValue = +(quantityDetail.value)
        quantityDetail.setAttribute("value", getValue - 1)
      }
    }
  }
}
function handleInput(element, productID) {

}
// END




