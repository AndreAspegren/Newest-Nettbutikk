updateview();

function checkout() {
    let cartItems = model.data.cart.map(item => `
    <div id="cartitems">
    <img src="${item.img}" alt="item image"/>
    <h3> ${item.name} <h3>
    <p> ${item.price} </p>
    <p> ${item.stock} </p>
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
    <div id="deliveryinfo">
    ${deliveryInputs()}
    </div>
    <div id="deliverymethod">
    ${deliveryMethod()}
    </div>
    <button id="checkoutbutton" onclick="completepurchase()">Fullfør kjøp</button>
    </div>
    </div>
    `;


    function deliveryInputs() {
        if (!model.app.loggedIn)`
      <input onchange="" placeholder = "Fornavn"/>
      <input onchange="" placeholder = "Etternavn"/>
      <input onchange="" placeholder = "E-post"/>
      <input onchange="" placeholder = "Telefonnummer"/>
      <input onchange="" placeholder = "Addresse"/>
      <input onchange="" placeholder = "Postnummer"/>
      <input onchange="" placeholder = "Poststed"/>
      `;
       
        else {
            return
            `
            <button onclick="change()">Endre</button>
            <div id="defaultInfo">
            ${model.data.user.FirstName}
            ${model.data.user.LastName}
            ${model.data.user.Email}
            ${model.data.user.PhoneNumber}
            ${model.data.user.Address}
            ${model.data.user.ZipCode + " " + model.data.user.ZipArea}
            </div>
            `;
        }
    }

    function deliveryMethod() {

    }

    function change() {

    }

}
