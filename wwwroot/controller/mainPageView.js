async function genUser() {
    if (await badInputs()) return
    let user = {
        FirstName: model.input.register.FirstName,
        LastName: model.input.register.LastName,
        Email: model.input.register.Email,
        PhoneNumber: model.input.register.PhoneNumber,
        Password: model.input.register.Password,
        Address: model.input.register.Address,
        ZipCode: model.input.register.ZipCode,
        ZipArea: model.input.register.ZipArea,
    }

    model.input.register.forEach(i => i = "")
    let query = await axios.Post("/setUser", user)
}

async function badInputs() {
    let badInputMsg = ""
    model.input.register.forEach((i, value) => {
        if (!i) badInputMsg += ``;
    })
    return false
}

function register() {
    var registerInputs = document.getElementById('registerinputs');
    registerInputs.style.display = (registerInputs.style.display === 'none' || registerInputs.style.display === '') ? 'block' : 'none';
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

function showSubCategories(categoryName) {
    let category = model.data.categories.find(cat => cat.name === categoryName);
    if (!category) return;

    let subCategoryList = category.subCategories.map(subCategory => `
        <div id="subcategory" onclick="filterProducts('${subCategory}')">${subCategory}</div>
    `).join('');

    document.getElementById('subCategories').innerHTML = subCategoryList;
}

function filterProducts(subCategoryName) {
    let filteredProducts = model.data.products.filter(product => product.category === subCategoryName);
    renderProducts(filteredProducts);
}