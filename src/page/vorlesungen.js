
function init() {

    const buttons = document.querySelectorAll(".teilnehmenButton")
    buttons.forEach((button) => {
        button.textContent = "Teilnehmen"
        button.onclick = function (){
            registerKurs(button.id)
        }
    });

    let email = localStorage.getItem('aktuellerBenutzer');
    if (email) {
        let benutzer = JSON.parse(localStorage.getItem(email));
        for (let i = 0; i < benutzer.kurse.length; i++) {
            document.getElementById(benutzer.kurse[i]).textContent = "Abmelden"
            document.getElementById(benutzer.kurse[i]).onclick = function () {
                unregisterKurs(benutzer.kurse[i])
            }
        }
    }
}

function registerKurs(kursId) {
    const aktuellerBenutzer = localStorage.getItem('aktuellerBenutzer');
    if (aktuellerBenutzer) {
        const benutzer = JSON.parse(localStorage.getItem(aktuellerBenutzer));
        benutzer.kurse.push(kursId);
        benutzer.kurse = [...new Set(benutzer.kurse)];
        localStorage.setItem(aktuellerBenutzer, JSON.stringify(benutzer));
        document.getElementById(kursId).textContent = "Abmelden";
        document.getElementById(kursId).onclick = function () {
            unregisterKurs(kursId)
        };
    } else {
        alert("Bitte erst anmelden")
    }
}

function unregisterKurs(kursId) {
    const aktuellerBenutzer = localStorage.getItem('aktuellerBenutzer');
    if (aktuellerBenutzer) {
        const benutzer = JSON.parse(localStorage.getItem(aktuellerBenutzer))
        const i = benutzer.kurse.indexOf(kursId);
        benutzer.kurse.splice(i, 1);
        localStorage.setItem(aktuellerBenutzer, JSON.stringify(benutzer))
    }

    document.getElementById(kursId).textContent = "Teilnehmen"
    document.getElementById(kursId).onclick = function () {
        registerKurs(kursId)
    }
}