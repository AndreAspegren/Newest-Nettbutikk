

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
        products: null,
        categories: [
            {
                name: "Category 1",
                subCategories: [
                    "sub 1-1",
                    "sub 1-2",
                    "sub 1-3",
                ]
            },
            {
                name: "Category 2",
                subCategories: [
                    "sub 2-1",
                    "sub 2-2",
                    "sub 2-3",
                ]
            },
        ],
    }
}

