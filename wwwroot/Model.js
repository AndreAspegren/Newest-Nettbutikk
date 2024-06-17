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
        //products: await axios.get(`/products`),

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

        products: [
            {
                "id": 0,
                "name": "Usb kabel 1",
                "description": "fin usb kabel",
                "price": 100,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 100,
                "technicalInfo": "Fin 1 meter lang usb kabel",
                "category": "sub 1-1"
            },
            {
                "id": 1,
                "name": "USB kabel 2",
                "description": "finere usb kabel",
                "price": 120,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 120,
                "technicalInfo": "Finere 2 meter lang usb kabel",
                "category": "sub 1-2"
            },
            {
                "id": 2,
                "name": "USB kabel 3 ",
                "description": "fineste usb kabel",
                "price": 140,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 140,
                "technicalInfo": "Fineste 3 meter lang usb kabel",
                "category": "sub 1-3"
            },
            {
                "id": 3,
                "name": "Luftfukter 1",
                "description": "fin luftfukter",
                "price": 500,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 10,
                "technicalInfo": "Fin liten luftfukter",
                "category": "sub 2-1"
            },
            {
                "id": 4,
                "name": "Luftfukter 2",
                "description": "finere luftfukter",
                "price": 700,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 12,
                "technicalInfo": "Finere medium luftfukter",
                "category": "sub 2-2"
            },
            {
                "id": 5,
                "name": "Luftfukter 3",
                "description": "fineste luftfukter",
                "price": 900,
                "sale": 0,
                "pictureURL": "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder.png",
                "numberInInventory": 14,
                "technicalInfo": "Fineste stor luftfukter",
                "category": "sub 2-3"
            },
        ],
        cart:[],
    }


    }