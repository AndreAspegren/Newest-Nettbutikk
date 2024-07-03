function searchresult() {




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
        <div id="searchproducts"></div>




    </div>
    

    `}