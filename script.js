function calcolaParametri() {
    // Ottieni i valori immessi
    let tempGomme = parseFloat(document.getElementById("tempGomme").value);
    let tempMotore = parseFloat(document.getElementById("tempMotore").value);
    let caricoAero = parseFloat(document.getElementById("caricoAero").value);

    // Aggiorna i risultati nel DOM
    document.getElementById("tempGommeResult").innerText = tempGomme.toFixed(2);
    document.getElementById("tempMotoreResult").innerText = tempMotore.toFixed(2);
    document.getElementById("caricoAeroResult").innerText = caricoAero.toFixed(2);

    // Grafico della temperatura delle gomme
    let tempGommeWidth = (tempGomme / 150) * 100;
    if (tempGommeWidth > 100) tempGommeWidth = 100;
    document.getElementById("tempGommeBar").style.width = tempGommeWidth + "%";

    // Grafico della temperatura del motore
    let tempMotoreWidth = (tempMotore / 150) * 100;
    if (tempMotoreWidth > 100) tempMotoreWidth = 100;
    document.getElementById("tempMotoreBar").style.width = tempMotoreWidth + "%";

    // Grafico del carico aerodinamico
    let caricoAeroWidth = (caricoAero / 10) * 100;
    if (caricoAeroWidth > 100) caricoAeroWidth = 100;
    document.getElementById("caricoAeroBar").style.width = caricoAeroWidth + "%";

    // Feedback
    let feedbackText = "";

    // Feedback sulle gomme
    if (tempGomme < 90) {
        feedbackText += "<p class='alert'>Le gomme sono troppo fredde, attenzione!</p>";
    } else if (tempGomme > 110) {
        feedbackText += "<p class='alert'>Le gomme sono troppo calde, attenzione!</p>";
    } else {
        feedbackText += "<p>Le gomme sono nella temperatura ottimale.</p>";
    }

    // Feedback sul motore
    if (tempMotore > 120) {
        feedbackText += "<p class='alert'>ATTENZIONE: Temperatura del motore troppo alta!</p>";
    } else {
        feedbackText += "<p>Temperatura del motore ok.</p>";
    }

    // Feedback sul carico aerodinamico
    if (caricoAero < 2.5 || caricoAero > 5.0) {
        feedbackText += "<p class='alert'>Il carico aerodinamico non è ottimale.</p>";
    } else {
        feedbackText += "<p>Carico aerodinamico ottimale.</p>";
    }

    // Mostra la sezione dei risultati
    document.getElementById("feedback").innerHTML = feedbackText;
    document.getElementById("resultSection").style.display = "block";
}
