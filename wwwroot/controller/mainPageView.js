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

function register() {
    var registerInputs = document.getElementById('registerinputs');
    registerInputs.style.display = (registerInputs.style.display === 'none' || registerInputs.style.display === '') ? 'block' : 'none';
}