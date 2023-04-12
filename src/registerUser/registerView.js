function registerView() {
    return /*HTML*/ `
    <div>
        <h3>Skriv inn ønsket brukernavn og passord:</h3>
        <p>Epost:</p>
        <input type="email">
        <p>Passord:</p>
        <input type="text">
        <p>Gjenta passord:</p>
        <input type="text"><br><br>
        <button onclick="save()">Lagre</button>
    </div>
    `;
}