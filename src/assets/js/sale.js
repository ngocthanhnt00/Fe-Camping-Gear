
// User
const currentUser = JSON.parse(localStorage.getItem('users')) || [];
const rightHeader = document.querySelector(".right-header");
if (currentUser) {
    currentUser.forEach((item, index) => {
        if (item.isAuthenticated) {
            rightHeader.innerHTML = `<a href="#" class="blog" title="Blog">
            <img src="../img/iconBlog.webp" alt="">
            <span>Blog</span>
        </a>
        <a href="../src/sale.html" class="blog" title="Khuyến mãi">
            <img src="../img/give.webp" alt="">
            <span>Khuyến mãi</span>
        </a>
        <a data-cart-counter="0" href="../src/cart.html" class="blog cart" title="Giỏ hàng">
            <img src="https://theme.hstatic.net/200000467803/1000988268/14/icon-cart.svg?v=435"
                alt="">
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