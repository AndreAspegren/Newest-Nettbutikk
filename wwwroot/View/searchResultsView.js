updateview();

function searchresult(matches) {


    app.innerHTML = `
    <div id="searchresult">
     <div id=homelogo>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
    </div>
     <div id="search">
           <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
         <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
       </div>
        <div id="categories">${categoryList}</div>

        <div id="filters"></div>
        <div id="searchcategories"></div>
        <div id="searchsubcategories"></div>

        <div id="searchproducts">
        ${matches.map(m => {
            return `
                < div class="product-card" >
           <img src="${m.img}" alt="${m.name}" class="productimage"/>
          <h3 id="productname">${m.name}</h3>
          <p id="productdescription">${m.shortDescription}</p>
          <p>${m.stock}</p>
          <p id="productprice">${m.price} NOK</p>
           <button id="addtocart" onclick="addToCart(${m.id})">Legg til handlevogn</button>
       </div >
            `;
        }) }
        </div>




    </div>
    

    `}