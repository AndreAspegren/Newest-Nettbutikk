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

        
    },

    data: {
        products: await axios.get(`/products`),
    }


    }