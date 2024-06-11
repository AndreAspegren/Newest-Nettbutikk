updateview();

function mainPage() {
    app.innerHTML =`
    
    
    <div id="mainDiv">

        <div id="login">
        <img src="" id="logo" onclick="logo" placeholder="Logo"/>
        <button id="login"> Logg inn </button>
        <button id="cart"> Handlekurv </button>
        <button id="huskerikkehvadensistevar">husker ikke hva denne gjør</button>
        </div>
        <div id="search">
            <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
            <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
        </div>
        <div id="categories"></div>
        <div id="productcards"></div>
        <div id="aboutus"></div>







    </div>
`}

function updateview()
{
    mainPage();
}