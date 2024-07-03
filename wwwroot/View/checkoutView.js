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
    <div id="checkout">
    <div id=homelogo>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
    </div>
     <div id="search">
           <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
         <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
       </div>
        <div id="categories">${categoryList}</div>

    <div id="cartitem">${cartItems}</div>
    <div id=checkout>
    <button id="checkoutbutton" onclick="completepurchase()">Fullfør kjøp</button>
    </div>
    </div>
    `;
}
