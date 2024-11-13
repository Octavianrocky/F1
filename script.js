function calcolaParametri() {
    // Ottieni i valori immessi
    let tempGomme = parseFloat(document.getElementById("tempGomme").value);
    let tempMotore = parseFloat(document.getElementById("tempMotore").value);
    let caricoAero = parseFloat(document.getElementById("caricoAero").value);
    let tempAria = parseFloat(document.getElementById("tempAria").value);
    let tempAsfalto = parseFloat(document.getElementById("tempAsfalto").value);

    // Aggiorna i risultati nel DOM
    document.getElementById("tempGommeResult").innerText = tempGomme.toFixed(2);
    document.getElementById("tempMotoreResult").innerText = tempMotore.toFixed(2);
    document.getElementById("caricoAeroResult").innerText = caricoAero.toFixed(2);
    document.getElementById("tempAriaResult").innerText = tempAria.toFixed(2);
    document.getElementById("tempAsfaltoResult").innerText = tempAsfalto.toFixed(2);

    // Feedback
    let feedback = '';
    feedback += feedbackTemperatura('Gomme', tempGomme, 75, 84, 85, 109, 110, 119);
    feedback += feedbackTemperatura('Motore', tempMotore, 75, 83, 84, 115, 116, 140);
    feedback += feedbackCaricoAerodinamico(caricoAero);
    feedback += feedbackTemperatura('Aria', tempAria, 16, 21, 22, 29, 30, 36);
    feedback += feedbackTemperatura('Asfalto', tempAsfalto, 13, 17, 18, 31, 32, 42);

    // Mostra il feedback
    document.getElementById('feedback').innerHTML = feedback;

    // Mostra la sezione dei risultati
    document.getElementById('resultSection').style.display = 'block';

    // Aggiorna le barre
    aggiornaBarra("tempGommeBar", tempGomme, 75, 84, 119);
    aggiornaBarra("tempMotoreBar", tempMotore, 75, 83, 140);
    aggiornaBarra("caricoAeroBar", caricoAero, 2, 3.5, 5);
    aggiornaBarra("tempAriaBar", tempAria, 16, 22, 36);
    aggiornaBarra("tempAsfaltoBar", tempAsfalto, 18, 31, 42);
}

// Funzione per determinare il feedback di temperatura
function feedbackTemperatura(nome, valore, minIntermedio, maxIntermedio, minOttimale, maxOttimale, minCritico, maxCritico) {
    let testo = `<strong>${nome}:</strong> `;
    if (valore < minIntermedio || valore > maxCritico) {
        testo += `Valore fuori norma.`;
    } else if (valore >= minIntermedio && valore <= maxIntermedio) {
        testo += `Valore intermedio.`;
    } else {
        testo += `Valore ottimale.`;
    }
    return `<p>${testo}</p>`;
}

// Funzione per il feedback del carico aerodinamico
function feedbackCaricoAerodinamico(valore) {
    let testo = "<strong>Carico aerodinamico:</strong> ";
    if (valore <= 2) {
        testo += "Auto più veloce sul dritto.";
    } else if (valore <= 3.5) {
        testo += "Carico medio.";
    } else {
        testo += "Auto più stabile in curva.";
    }
    return `<p>${testo}</p>`;
}

// Funzione per aggiornare la larghezza delle barre
function aggiornaBarra(idBarra, valore, minIntermedio, maxIntermedio, max) {
    let width = Math.min((valore / max) * 100, 100);
    document.getElementById(idBarra).style.width = width + "%";

    let barra = document.getElementById(idBarra);
    if (valore < minIntermedio) {
        barra.style.backgroundColor = "red"; // Valore troppo basso
    } else if (valore >= minIntermedio && valore <= maxIntermedio) {
        barra.style.backgroundColor = "yellow"; // Valore intermedio
    } else {
        barra.style.backgroundColor = "green"; // Valore ottimale
    }
}
