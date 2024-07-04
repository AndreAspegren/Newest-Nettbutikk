updateview();

function productview(key) {
    let product = model.data.products.find(prod => prod.id == productId)
    if (!product) {
        console.log("fant ikke produkt");
        return;
    }

    app.innerHTML = `
    <div id="productview">
    <div id=homelogo>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
    </div>
     <div id="search">
           <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
         <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
       </div>
        <div id="categories">${categoryList}</div>

        <img src="${model.data.products[key].img}" alt="${model.products[key].name}" id="productimg"/>
        <h2>${model.data.products[key].name}</h2>
        <p>versjoner av produkt</p>
        <p>${model.data.products[key].stock}</p>
        <p>${model.data.products[key].description}</p>
        <p>${model.data.products[key].price}</p>
        <button id="addtocart" onclick="addtocart(${product.id})"> Legg til i handlekurv </button>

    </div>
`}