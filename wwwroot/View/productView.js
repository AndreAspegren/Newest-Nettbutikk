//updateview();

function productview() {
    let product = model.data.products.find(prod => prod.id == productId)
    if (!product) {
        console.log("fant ikke produkt");
        return;
    }

    app.innerHTML = `


    `
}