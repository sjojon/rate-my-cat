let randomCatImg = ``;
let randomNum;
let lastRandomNumber;

function getRandomCat() {
    randomNum = Math.floor(Math.random() * catObject.length);
    randomCatImg = /*HTML*/`
    <div>${catObject[randomNum].name}</div>
    <img src="${catObject[randomNum].img}" height=200px width=300px>
        <div>
        Pels kvalitet: <input type="number" min=0 max=10 value=0><br>
        Ansikts søthet:  <input type="number" min=0 max=10 value=0><br>
        Utstråling:  <input type="number" min=0 max=10 value=0><br>
        Hale:  <input type="number" min=0 max=10 value=0><br>
        <button onclick="vote()">Avgi stemme</button>
        </div>
    `;


    // for (let i = 0; i < catObject.length; i++) {
    //     randomCatImg = /*HTML*/`
    //     <div>${catObject[randomNum].name}</div>
    //     <img src="${catObject[randomNum].img}">
    //     `;
    // }

    console.log(randomCatImg);
    randomCatView();
}



function vote() {
    console.log('Avgi stemme');
}