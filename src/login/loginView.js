function loginView() {
    return /*HTML*/`
    <div>
    <h3>Logg inn på profil siden din her:</h3>
    <p>Brukernavn:</p>
    <input type="email">
    <p>Passord:</p>
    <input type="password"><br><br>
    <button onclick="login()">Logg inn</button>
    <h5>Har du ikke profil, kan du registrere deg her:
    <button onclick="register()">Registrer</button></h5>
    </div>
    
    `;
}