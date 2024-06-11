updateview();

function mainPage() {
    app.innerHTML = `
    
    
    <div id="mainDiv">

        <img src="" id="logo" onclick="logo"/>

        <div id="search">
            <input type="text" onchange="seearchbar" id="searchbar" placeholder="Søk..." />
            <button id="seachbutton" id="seachbutton" onclick="searchbutton">Søk</button>
        </div>

        test
        test
        test







    </div>
`}

function updateview()
{
    mainPage();
}