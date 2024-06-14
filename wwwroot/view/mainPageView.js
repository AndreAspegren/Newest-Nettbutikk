updateview();

function homescreen() {
    app.innerHTML =`
    
    
    <div id="mainDiv">

        <div id="login">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIXaiO9wCCeAHXEwioJntszdoi9YiEIDDgA&s" id="logo" onclick="logo" placeholder="Logo"/>
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
        <div id="aboutus">Vi er best, kjøp fra oss</div>

        
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
`}

function updateview(newView)
{
    newView ? (model.app.currentView = newView, window[newView]()) : window[model.app.currentView]()
}

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
    let query = await axios.Post("/genUser", user)
}

async function badInputs() {
    let badInputMsg = ""
    model.input.register.forEach((i, value) => {
        if (!i) badInputMsg += ``;
    })
    return false
}