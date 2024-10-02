const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Call API 
// User
const currentUser = JSON.parse(localStorage.getItem('users')) || [];
const rightHeader = document.querySelector(".right-header");
if (currentUser) {
    currentUser.forEach((item, index) => {
        if (item.isAuthenticated) {
            rightHeader.innerHTML = `    <a href="#" class="blog" title="Blog">
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
let listProduct = JSON.parse(localStorage.getItem('product')) || [];

const sum = () => {
    let subtotal = $('.info-subtotal span');
    let sale = $('.info-sale span');
    let payment = $('.info-total span');
    let priceSale = 0;
    let totalpay = 0;
    let totalPrice = listProduct.reduce((acc, curr) => {
        acc += curr.priceNew == 0 ? curr.total : (curr.priceOld * curr.quantity);
        // curr.total: Tổng của (curr.priceNew * curr.quantity)
        priceSale -= curr.priceNew == 0 ? 0 : (curr.total - (curr.priceOld * curr.quantity));
        return acc;
    }, 0);
    console.log(totalPrice, 'totalPrice');
    console.log(priceSale, 'priceSale');
    subtotal.innerHTML = totalPrice.toLocaleString('en-US') + '₫';
    sale.innerHTML = `${priceSale.toLocaleString('en-US') + '₫'}`;
    payment.innerHTML = (totalPrice - priceSale).toLocaleString('en-US') + '₫'
};

sum()
const setLocal = () => {
    return localStorage.setItem('product', JSON.stringify(listProduct))
}

const countProduct = () => {
    let rightHeader = document.querySelector('.right-header a:nth-child(3)');
    let titleCart = document.querySelector('.title-cart');
    if (listProduct.length > 0) {
        titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
        rightHeader.setAttribute('data-cart-counter', `${listProduct.length}`);
        let counter = $('.count');
        counter.style.display = 'inline-block';
    } else {
        titleCart.innerHTML = `Giỏ hàng <span class="count">(${listProduct.length} sản phẩm)</span>`;
        rightHeader.setAttribute('data-cart-counter', '0');
        let counter = $('.count');
        counter.style.display = 'none';
    }
}

function updateProductList() {
    let componentLeft = document.querySelector('.component-left');
    let result = listProduct.map((item, index) => {
        return `
        <div class="cart-item">
               <div class="component-product">
                   <div class="product_check">
                       <input type="checkbox" name="" id="" data-price="" data-quantity="">
                   </div>
                   <div class="product_image">
                       <a href="#">
                           <img src="${item.image}" alt="">
                       </a>
                   </div>
                   <div class="product_info" data-id="${item.id}">
                       <div onclick="removeItem(${index})" class="item_remove">
                           <span>&times;</span>
                       </div>
                       <div class="product-relative">
                           <a href="" title="">${item.name}</a>
                           <p class="cart-color-item"></p>
                           <div class="price-prd">
                               <span>${item.priceNew.toLocaleString('en-US')}đ</span>
                               <del class="${item.priceOld == null && 'none'}">${item.priceOld != null ? item.priceOld.toLocaleString('en-US') : null}đ</del>
                           </div>
                       </div>
                       <div onclick="clickUpdateQuantity(event)" class="select-quantity" >
                           <div  class="button-minus">-</div>
                           <input onchange="handleInput(this, ${item.id})" id="two-input" value="${item.quantity}" min="1" aria-valuemax="50" type="number" name=""
                               class="product-quantity">
                           <div class="button-maxnus">+</div>
                       </div>
                   </div>
               </div>
           </div>
        `;
    });
    componentLeft.innerHTML = result.join('');
    let rightComponent = document.querySelector('.component-right');
    let check = listProduct.length > 0 ? rightComponent.style.display = 'block' : rightComponent.style.display = 'none';
    countProduct()
    sum()
    if (listProduct.length <= 0) {
        componentLeft.style.margin = '0 auto'
        componentLeft.innerHTML = `
        <div class="cart-empty">
            <p class="text-empty">Không có sản phẩm nào trong giỏ hàng</p>
            <div class="cart-empty-btn">
                <a href="../index.html" title="Trang chủ">
                    <div class="checkout">Tiếp tục mua hàng <ion-icon
                            style="font-size: 24px; margin-left: 5px;" name="cart-outline"></ion-icon>
                    </div>
                </a>
            </div>
         </div>
        `
    }

}

// * Click Button Increase And Decrease Quantity
const clickUpdateQuantity = (event) => {
    if (listProduct.length > 0) {
        // * Click Button Increase And Decrease Quantity
        let isPlusButton = event.target.classList.contains('button-maxnus');
        let isMinusButton = event.target.classList.contains('button-minus');
        let productInfo = event.target.closest('.product_info');
        console.log(productInfo, 'oooooo');
        if (isMinusButton || isPlusButton) {
            for (let i = 0; i < listProduct.length; i++) {
                if (listProduct[i].id == (productInfo.dataset.id)) {
                    if (isPlusButton) {
                        listProduct[i].quantity += 1;
                        setLocal()

                    } else if (isMinusButton) {
                        listProduct[i].quantity -= 1;
                        setLocal();
                        if (listProduct[i].quantity == 0) {
                            removeItem(i)
                        };
                    }
                    listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity;
                    setLocal()
                    updateProductList()

                }
            }
        }

    }

}
// * End


updateProductList();


const handleInput = (element, productID) => {
    let getValue = +(element.value);
    let check = productID;
    console.log(check, 'sssssssss');
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].id == productID) {
            listProduct[i].quantity = getValue
            setLocal()
            listProduct[i].total = listProduct[i].priceNew * listProduct[i].quantity
            console.log(check);
            setLocal()
            updateProductList()
            return 0; // Return và không thực hiện đoạn mã bên dưới
        }
    }
}
const btnCheckOut = document.querySelector(".summary-checkout");
btnCheckOut.onclick = () => {
    window.location.href = "./checkout.html"
}

const removeItem = (i) => {
    listProduct.splice(i, 1);
    setLocal();
    countProduct()
    updateProductList();
}