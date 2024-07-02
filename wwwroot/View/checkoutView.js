/*updateview();
*/
function checkout() {
    let cartItems = model.data.cart.map(item => `
    <div id="cartitems">
    <img src="${item.pictureURL}" alt="item image"/>
    <h3> item name here <h3>
    <p> item price here </p>
    <button onclick="removecartitem(${item.id})"> Slett </button>
    </div>
    `).join('');



    app.innerHTML = `
    <div id="maincheckout">
    <div id=homelogo>
    <img src="null" alt="home logo" onclick="homescreen()"/>
    </div>
    <div id="cartitem">${cartItems}</div>
    <div id=checkout>
    <button id="checkoutbutton" onclick="completepurchase()">Fullfør kjøp</button>
    </div>
    </div>
    `;
}
