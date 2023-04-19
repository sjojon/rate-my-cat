updateView();


function updateView() {
    let html = '';
    const page = model.app.page;
    html += headerView();

    switch (page) {
        case 'home':
            html += homeView();
            break;
        case 'profile':
            html += profileView();
            break;
        case 'rating':
            html += ratingView();
            break;
        case 'randomCat':
            html += randomCatView();
            break;
        case 'top3':
            html += top3View();
            break;
        case 'login':
            html += loginView();
            break;
        case 'register':
            html += registerView();
            break;
    }
    document.getElementById('app').innerHTML = html;
}