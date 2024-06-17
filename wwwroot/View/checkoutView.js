/*updateview();
*/
function checkout() {
    app.innerHTML = `
    <div id="maincheckout">
    <div id=homelogo></div>
    <div id="cartitem"></div>
    <div id=checkout>
    <button id="checkoutbutton">Fullfør kjøp</button>
    </div>
    </div>
    `
}


function checkoutView() {
    document.getElementById('app').innerHTML = `
        <div id="cartItems"></div>
        <button onclick="proceedToPayment()">Proceed to Payment</button>
    `;

    renderCart();
}
