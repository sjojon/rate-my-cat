const model = {

    app: {
        page: 'home',
    },

    input: {
        profile: {
            name: '',
            about: '',
            aboutCats: '',
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

    },

    data: {
        account: [
            { id: 1, name: '', aboutMe: '', aboutCat: '' }
        ],

        cats: [
            { id: 1, name: 'Samba', furQuality: 10, faceCuteness: 10, charisma: 10, tail: 10, img: '', }
        ]
    },
};

