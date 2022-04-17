function init() {
    document.getElementById('anmeldenButton').addEventListener('click', anmelden);
    document.getElementById('abmeldenButton').addEventListener('click', abmelden);
    hideAnmeldeForm();
}

function anmelden() {
    const email = document.getElementById('benutzername').value;
    const password = document.getElementById('passwort').value;

    localStorage.setItem('aktuellerBenutzer', email);
    let benutzer = JSON.parse(localStorage.getItem(email));
    if (!benutzer) {
        benutzer = {
            email: email,
            password: password,
            kurse: []
        }
        localStorage.setItem(email, JSON.stringify(benutzer))
    }
    hideAnmeldeForm()
}

function abmelden() {
    localStorage.removeItem('aktuellerBenutzer');
    let anmeldenForm = document.getElementById('anmeldenForm');
    anmeldenForm.style.display = 'block'
    anmeldenForm.reset();
    document.getElementById('abmeldenForm').style.display = 'none'
}

function hideAnmeldeForm() {
    const aktuellerBenutzer = localStorage.getItem('aktuellerBenutzer')
    if (aktuellerBenutzer) {
        document.getElementById('anmeldenForm').style.display = 'none'
        document.getElementById('abmeldenForm').style.display = 'block'
        document.getElementById('aktuellerBenutzer').textContent = aktuellerBenutzer
    }
}



