
function formatNumber(number) {
    const convertNum = parseFloat(number)
    const formattedNumber = convertNum.toLocaleString().replace(/\./g, ',')

    return formattedNumber;
}
const productBuy = JSON.parse(localStorage.getItem("product")) || [];
console.log(productBuy)
const sideBar = document.getElementById("sidebar-web");
console.log(sideBar)

if (productBuy.length > 0) {
    // console.log("Hih")
    let totalPrice = productBuy.reduce((acc, curr) => {
        acc += curr.total
        return acc;
    }, 0);
    console.log(totalPrice, "ssss")
    const result = productBuy.map(item => {
        return `<tr class="product" data-product-id="1047454692" data-variant-id="1107032021">
        <td class="product-image">
            <div class="product-thumbnail">
                <div class="product-thumbnail-wrapper">
                    <img class="product-thumbnail-image"
                        alt="Lều cắm trại 2 phòng 5-8 người Blackdog BD-ZP009"
                        src="${item.image}">
                </div>
                <span class="product-thumbnail-quantity" aria-hidden="true">${item.quantity}</span>
            </div>
        </td>
        <td class="product-description">
            <span class="product-description-name order-summary-emphasis">${item.name}</span>

            <span class="product-description-variant order-summary-small-text">
                ${item.brand}
            </span>

        </td>
        <td class="product-quantity visually-hidden">${item.quantity}</td>
        <td class="product-price">
            <span class="order-summary-emphasis">${formatNumber(item.total)}đ</span>
        </td>
    </tr>`
    }).join("")
    sideBar.innerHTML = `
<div class="sidebar-content">
<div class="order-summary order-summary-is-collapsed">
    <h2 class="visually-hidden">Thông tin đơn hàng</h2>
    <div class="order-summary-sections">
        <div class="order-summary-section order-summary-section-product-list"
            data-order-summary-section="line-items">
            <table class="product-table">
                <thead>
                    <tr>
                        <th scope="col"><span class="visually-hidden">Hình ảnh</span></th>
                        <th scope="col"><span class="visually-hidden">Mô tả</span></th>
                        <th scope="col"><span class="visually-hidden">Số lượng</span></th>
                        <th scope="col"><span class="visually-hidden">Giá</span></th>
                    </tr>
                </thead>
                <tbody>

                    ${result}

                </tbody>
            </table>
        </div>

        <div class="order-summary-section order-summary-section-discount"
            data-order-summary-section="discount">
            <form id="form_discount_add" accept-charset="UTF-8" method="post">
                <input name="utf8" type="hidden" value="✓">
                <div class="fieldset">
                    <div class="field  ">
                        <div class="field-input-btn-wrapper">
                            <div class="field-input-wrapper">
                                <label class="field-label" for="discount.code">Mã giảm giá</label>
                                <input placeholder="Mã giảm giá" class="field-input"
                                    data-discount-field="true" autocomplete="false"
                                    autocapitalize="off" spellcheck="false" size="30" type="text"
                                    id="discount.code" name="discount.code" value="">
                            </div>
                            <button type="submit class="field-input-btn btn btn-default btn-disabled">
                                <span class="btn-content">Sử dụng</span>
                                <i class="btn-spinner icon icon-button-spinner"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        <div class="order-summary-section order-summary-section-display-discount"
            data-order-summary-section="discount-display">
            <div>
                <div class="hrv-discount-choose-coupons">
                    <div>
                        <svg width="15" height="10" viewBox="0 0 18 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17.3337 5.3335V2.00016C17.3337 1.07516 16.5837 0.333496 15.667 0.333496H2.33366C1.41699 0.333496 0.675326 1.07516 0.675326 2.00016V5.3335C1.59199 5.3335 2.33366 6.0835 2.33366 7.00016C2.33366 7.91683 1.59199 8.66683 0.666992 8.66683V12.0002C0.666992 12.9168 1.41699 13.6668 2.33366 13.6668H15.667C16.5837 13.6668 17.3337 12.9168 17.3337 12.0002V8.66683C16.417 8.66683 15.667 7.91683 15.667 7.00016C15.667 6.0835 16.417 5.3335 17.3337 5.3335ZM15.667 4.11683C14.6753 4.69183 14.0003 5.77516 14.0003 7.00016C14.0003 8.22516 14.6753 9.3085 15.667 9.8835V12.0002H2.33366V9.8835C3.32533 9.3085 4.00033 8.22516 4.00033 7.00016C4.00033 5.76683 3.33366 4.69183 2.34199 4.11683L2.33366 2.00016H15.667V4.11683ZM9.83366 9.50016H8.16699V11.1668H9.83366V9.50016ZM8.16699 6.16683H9.83366V7.8335H8.16699V6.16683ZM9.83366 2.8335H8.16699V4.50016H9.83366V2.8335Z"
                                fill="#318DBB"></path>
                        </svg>
                        <span>Xem thêm mã giảm giá</span>
                    </div>
                    <div id="list_short_coupon">
                        <span><span data-code="FREESHIPFF">Giảm 5%</span></span>
                    </div>
                </div>
            </div>
        </div>


        <div class="order-summary-section order-summary-section-redeem redeem-login-section"
            data-order-summary-section="discount">
            <div class="redeem-login">
                <div class="redeem-login-title">
                    <h2>Chương trình khách hàng thân thiết</h2>


                    <i class="btn-redeem-spinner icon-redeem-button-spinner"></i>


                </div>


                <div class="redeem-login-btn">
                    <a
                        href="/account/login?urlredirect=%2Fcheckouts%2Ff7efa1202b2847c0ae997f100d7f8123%3Fstep%3D1">Đăng
                        nhập</a>
                </div>


            </div>

        </div>


        <div class="order-summary-section order-summary-section-total-lines payment-lines"
            data-order-summary-section="payment-lines">
            <table class="total-line-table">
                <thead>
                    <tr>
                        <th scope="col"><span class="visually-hidden">Mô tả</span></th>
                        <th scope="col"><span class="visually-hidden">Giá</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="total-line total-line-subtotal">
                        <td class="total-line-name">Tạm tính</td>
                        <td class="total-line-price">
                            <span class="order-summary-emphasis"
                                data-checkout-subtotal-price-target="1348300000">
                                13,483,000₫
                            </span>
                        </td>
                    </tr>






                    <tr class="total-line total-line-shipping">
                        <td class="total-line-name">Phí vận chuyển</td>
                        <td class="total-line-price">
                            <span class="order-summary-emphasis"
                                data-checkout-total-shipping-target="0">

                                —

                            </span>
                        </td>
                    </tr>
                </tbody>
                <tfoot class="total-line-table-footer">
                    <tr class="total-line">
                        <td class="total-line-name payment-due-label">
                            <span class="payment-due-label-total">Tổng cộng</span>
                        </td>
                        <td class="total-line-name payment-due">
                            <span class="payment-due-currency">VND</span>
                            <span class="payment-due-price"
                                data-checkout-payment-due-target="${totalPrice}">
                                ${formatNumber(totalPrice)}₫
                            </span>
                            <span class="checkout_version" display:none=""
                                data_checkout_version="4">
                            </span>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
</div>

`
}

const checkOut = document.querySelector(".checkout");
checkOut.onclick = function (e) {
    e.preventDefault();

    window.location.href = `./payment.html`
}