updateview();
function homescreen() {
    let productCards = model.data.products.map(product => `
       <div class="product-card">
           <img src="${product.img}" alt="${product.name}" class="productimage"/>
          <h3 id="productname">${product.name}</h3>
          <p id="productdescription">${product.shortDescription}</p>
          <p id="instock">${product.stock}</p>
          <p id="productprice">${product.price} NOK</p>
           <button class="buybutton" onclick="addToCart(${product.id})">Add to Cart</button>
       </div>
  `).join('');

    app.innerHTML = `
      <div id="mainDiv">
          <img src="path/to/logo.png" id="logo" onclick="homescreen()">
          <div id="search">
              <input type="text" id="searchbar" placeholder="Search...">
              <button id="searchbutton">Search</button>
          </div>
          <div id="login">
              <button id="loginbutton" onclick="login()">Login</button>
              <button id="cartbutton" onclick="cart()">Cart</button>
          </div>
          <div id="categories">
              <button class="category-button" onclick="filterCategory('Electronics')">Electronics</button>
              <button class="category-button" onclick="filterCategory('Clothing')">Clothing</button>
              <button class="category-button" onclick="filterCategory('Books')">Books</button>
          </div>
          <div id="productcards">
              ${productCards}
          </div>
      </div>
      <footer>
          <div id="aboutus">About Us: We are a company dedicated to providing the best products...</div>
      </footer>
  `;
}


function updateview(newView) {
    newView ? (model.app.currentView = newView, window[newView]()) : window[model.app.currentView]()
}

async function init() {
    let response = await axios.get(`/products`)
    model.data.products = response.data
}

async function badInputs() {
    let badInputMsg = ""
    model.input.register.forEach((i, value) => {
        if (!i) badInputMsg += ``;
    })
    return false
}

function showSubCategories(categoryName) {
    let category = model.data.categories.find(cat => cat.name === categoryName);
    if (!category) return;

    let subCategoryList = category.subCategories.map(subCategory => `
        <div id="subcategory" onclick="filterProducts('${subCategory}')">${subCategory}</div>
    `).join('');

    document.getElementById('subCategories').innerHTML = subCategoryList;
}

function renderProducts(products) {
    let ProductCards = products.map(product => `
        <div id="productcard">
            <img src="${product.pictureURL}" alt="${product.name}" class="productimage"/>
            <h3 id="productname">${product.name}</h3>
            <p id="productdescription">${product.description}</p>
            <p id="productprice">${product.price} NOK</p>
            <button id="addtocart" onclick="addToCart(${product.id})">Add to Cart</button>
            
        </div>
    `).join('');

    document.getElementById('productcards').innerHTML = ProductCards;
}

function renderCart() {
    let cartItems = model.data.cart.map(item => `
        <div class="cart-item">
            <img src="${item.pictureURL}" alt="${item.name}" class="product-image"/>
            <h3 class="product-name">${item.name}</h3>
            <p class="product-price">${item.price} NOK</p>
        </div>
    `).join('');
}