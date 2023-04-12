const model = {

    app: {
        page: 'rating',
    },

    input: {
        profile: {
            name: '',
            about: '',
            catName: '',
            aboutCat: '',
        },

        rating: {
            catImg: '',
            description: '',
        },

        top3: {
            // Skal bare vise fram 3 bilder, trenger ingen inputs
        },

        login: {
            userName: '',
            password: '',
        },

        register: {
            email: '',
            password: '',
        },

    },

    data: {
        account: [
            { id: 1, name: '', aboutMe: '', img: '', }
        ],

        cats: [
            { id: 1, name: 'Samba', aboutCat: '', furQuality: 10, faceCuteness: 10, charisma: 10, tail: 10, img: '', }
        ]
    },
};

