updateview();

function mainPage() {
    app.innerHTML =`
    
    
    <div id="mainDiv">

        <div id="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
        <button id="login"> Logg inn </button>
        <button id="cart"> Handlekurv </button>
        <button id="huskerikkehvadensistevar">husker ikke hva denne gj�r</button>
        </div>

        <div id="search">
            <input type="text" onchange="seearchbar" id="searchbar" placeholder="S�k..." />
            <button id="seachbutton" id="seachbutton" onclick="searchbutton">S�k</button>
        </div>

        <div id="categories"></div>
        <div id="productcards"></div>
        <div id="aboutus">Vi er best, kj�p fra oss</div>







    </div>
`}

function updateview()
{
    mainPage();
}