// Total price initial value
let total = 0;

// get total price element from cart
const totalPrice = document.getElementById('total-price');
const discount = document.getElementById('discount');
const grandTotal = document.getElementById('grand-total');

function addToCart(target) {
    // get products name and set in cart
    const selectedProductsContainer = document.getElementById('selected-products');
    const productsName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = productsName;
    selectedProductsContainer.appendChild(li);

    // get price of products and calculation
    const price = parseInt(target.childNodes[6].nextSibling.innerText.split(' ')[0]);

    // Total price calculation
    total = total + price;

    // set total price
    totalPrice.innerText = total + '.00';

    // enable or disable coupon apply btn
    if (total >= 200) {
        const couponApplyBtn = document.getElementById('coupon-apply-btn');
        couponApplyBtn.removeAttribute('disabled')
    }

    // purchase button function
    const purchaseBtn = document.getElementById('purchase-btn');
    if (total > 0) {    // enabled if total > 0;
        purchaseBtn.removeAttribute('disabled');
    }
}

// coupon code apply function
const couponApplyBtn = document.getElementById('coupon-apply-btn');
couponApplyBtn.addEventListener('click', function () {
    const couponValue = document.getElementById('coupon-field').value;
    const couponCode = 'SELL200';
    if (couponValue === couponCode) {
        alert('Congratulations! You have got 20% discount.')
        // Calculation
        const discountAmount = total * .20;
        discount.innerText = discountAmount.toFixed(2);
        grandTotal.innerText = (total - discountAmount);

    } else { alert('Not matched your coupon!') }
})