let model = {

    app: {
        userID: null,
        currentView: 'homescreen',
        darkmode: false,
        loggedIn: false,
        html: app = document.getElementById("app")
    },

    input:
    {
        login: {
            id: null,
            password: null,
        },
        register: {
            FirstName: "",
            LastName: "",
            Email: "",
            PhoneNumber: "",
            Password: "",
            DateCreated: "",
            Address: "",
            ZipCode: "",
            ZipArea: ""
        }
        
    },

    data: {
        products: await axios.get(`/products`),
    }


    }