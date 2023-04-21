const model = {

    app: {
        page: 'home',
        currentRandomCat: 0,
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
        accounts: [
            { id: 0, name: '', aboutMe: '', img: '', }
        ],

        cats: [
            { id: 0, name: 'Samba', aboutCat: '', furQuality: 8, faceCuteness: 9, charisma: 6, tail: 8, img: 'img/01.jpg', },
            { id: 1, name: 'Mons', aboutCat: '', furQuality: 5, faceCuteness: 8, charisma: 7, tail: 8, img: 'img/02.jpg', },
            { id: 2, name: 'Pushild', aboutCat: '', furQuality: 8, faceCuteness: 7, charisma: 5, tail: 6, img: 'img/03.jpg', },
            { id: 3, name: 'Felix', aboutCat: '', furQuality: 6, faceCuteness: 4, charisma: 6, tail: 5, img: 'img/04.jpg', },
            { id: 4, name: 'Bella', aboutCat: '', furQuality: 7, faceCuteness: 6, charisma: 4, tail: 7, img: 'img/05.jpg', },
            { id: 5, name: 'Tussi', aboutCat: '', furQuality: 6, faceCuteness: 5, charisma: 7, tail: 6, img: 'img/06.jpg', },
            { id: 6, name: 'Balder', aboutCat: '', furQuality: 7, faceCuteness: 8, charisma: 8, tail: 7, img: 'img/07.jpg', },
            { id: 7, name: 'Findus', aboutCat: '', furQuality: 5, faceCuteness: 7, charisma: 7, tail: 5, img: 'img/08.jpg', },
            { id: 8, name: 'Milo', aboutCat: '', furQuality: 8, faceCuteness: 6, charisma: 5, tail: 6, img: 'img/09.jpg', },
            { id: 9, name: 'Tassen', aboutCat: '', furQuality: 7, faceCuteness: 8, charisma: 6, tail: 7, img: 'img/10.jpg', },
        ],
    },
};

const catObject = model.data.cats;