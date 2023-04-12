function randomCatView() {
    return /*HTML*/`
    <div>
        Pels kvalitet: <input type="number" min=0 max=10 value=0><br>
        Ansikts søthet:  <input type="number" min=0 max=10 value=0><br>
        Utstråling:  <input type="number" min=0 max=10 value=0><br>
        Hale:  <input type="number" min=0 max=10 value=0><br>
        <button>Avgi stemme</button>
    </div>
    `;
}