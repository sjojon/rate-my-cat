view();
function view() {
    document.getElementById('app').innerHTML = /*HTML*/`
    ${headerView()}
    ${updateView()}
    `;
}

function updateView() {
    const page = model.app.page;

    let html = '';
    switch (page) {
        case 'home':
            html = homeView();
            break;
        case 'profile':
            html = profileView();
            break;
        case 'rating':
            html = ratingView();
            break;
        case 'top3':
            html = top3View();
            break;
        case 'login':
            html = loginView();
            break;
    }
    return html;
}