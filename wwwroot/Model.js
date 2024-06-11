let model = {

    app: {
        userID: null,
        currentView: 'homescreen',
        darkmode: false,
        loggedIn: false,

    },

    input:
    {
        login: {
            id: null,
            password: null,
        },

        
    },

    data: {
        products: await axios.get(`https://localhost:8000/textobject`),
    }


    }