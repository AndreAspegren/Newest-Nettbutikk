
function homescreen() {
  let productCards = model.data.products.map(product => `
       <div class="product-card">
           <img src="${product.pictureURL}" alt="${product.name}" class="productimage"/>
          <h3 id="productname">${product.name}</h3>
          <p id="productdescription">${product.description}</p>
          <p id="productprice">${product.price} NOK</p>
           <button id="addtocart" onclick="addToCart(${product.id})">Add to Cart</button>
       </div>
    `).join('');

   let categoryList = model.data.categories.map(category => `
       <div class="category" onclick="showSubCategories('${category.name}')">${category.name}</div>
   `).join('');

  app.innerHTML = `
    
    
   
  <div id="mainDiv">
   
     <div id="login">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
      <button id="login"> Logg inn </button>
     <div id="registerdiv">
      <div id="registerinputs" style="display: none;">
       <input onchange="model.input.register.FirstName = this.value" placeholder = "Fornavn"/>
      <input onchange="model.input.register.LastName = this.value" placeholder = "Etternavn"/>
      <input onchange="model.input.register.Email = this.value" placeholder = "E-post"/>
      <input onchange="model.input.register.PhoneNumber = this.value" placeholder = "Telefonnummer"/>
    <input onchange="model.input.register.Password = this.value" placeholder = "Passord"/>
      
       <input onchange="model.input.register.Address = this.value" placeholder = "Addresse"/>
       <input onchange="model.input.register.ZipCode = this.value" placeholder = "Postnummer"/>
      <input onchange="model.input.register.>ZipArea = this.value" placeholder = "Poststed"/>
      <button onclick="genUser">Registrer bruker</button>
       </div>

       </div>
     <button id="cart"> Handlekurv </button>
      <button id="huskerikkehvadensistevar">husker ikke hva denne gjør</button>
      </div>

      <div id="search">
           <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
         <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
       </div>

      <div id="categories">${categoryList}</div>
      <div id="subCategories"></div>
       <div id="productcards">${productCards}</div>
      <div id="aboutus">Vi er best, kjøp fra oss</div>


    </div>
`}

function updateview(newView) {
    newView ? (model.app.currentView = newView, window[newView]()) : window[model.app.currentView]()
}

async function badInputs() {
    let badInputMsg = ""
    model.input.register.forEach((i, value) => {
        if (!i) badInputMsg += ``;
    })
    return false
}

async function init() {
    let response = await axios.get("/products")
    model.data.products = response.data
}