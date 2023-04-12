function profileView() {
    return /*HTML*/`
    <div>
        <h2>Om meg:</h2>
        <h3>Navn Navnesen</h3>
        <img src="img/2.jpg" alt="Profilbilde" height="200px" width="200px">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Earum repudiandae voluptatum modi dolorem quod deleniti 
        harum rerum numquam atque necessitatibus.</p>
        </div>
        
        <div>
        <h2>Om kattene mine:</h2>
        <h3>Navn</h3>
        <img src="img/blue-cat.jpg" alt="Bilde av katt" height="200px" width="300px">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Earum repudiandae voluptatum modi dolorem quod deleniti 
        harum rerum numquam atque necessitatibus.</p>
        </div>
        <div>
            <p>Navn:</p>
            <input type="text">
            <p>Om meg:</p>
            <input type="text">
            <p>Navn på kattene</p>
            <input type="text">
            <p>Om kattene mine:</p>
            <input type="text"><br><br>
            <button onclick="saveInfo()">Lagre</button>
        </div>
    `;
}