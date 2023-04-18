function randomCatView() {
    return /*HTML*/`
    <br>
    <button onclick="getRandomCat()">Vis tilfeldig katt</button>
    <div>
    ${randomCatImg}
    </div>
    `;
}