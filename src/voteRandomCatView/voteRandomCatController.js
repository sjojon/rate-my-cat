function getRandomCat() {
    randomNum = Math.floor(Math.random() * catObject.length);
    model.app.currentRandomCat = randomNum;
    updateView();
}

function vote() {
    console.log('Avgi stemme');
}

function displayRandomCat() {
    let index = model.app.currentRandomCat;
    randomCatImg = /*HTML*/`
    <div>${catObject[index].name}</div>
    <img src="${catObject[index].img}" height=200px width=300px>
        <div>
        Pels kvalitet: <input type="number" min=0 max=10 value=0><br>
        Ansikts søthet:  <input type="number" min=0 max=10 value=0><br>
        Utstråling:  <input type="number" min=0 max=10 value=0><br>
        Hale:  <input type="number" min=0 max=10 value=0><br>
        <button onclick="vote()">Avgi stemme</button>
        </div>
    `;
    return randomCatImg;
}