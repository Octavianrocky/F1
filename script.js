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

    // Grafico della temperatura dell'aria
    let tempAriaWidth = (tempAria / 50) * 100;  // Assuming 50°C as max for air temperature
    if (tempAriaWidth > 100) tempAriaWidth = 100;
    document.getElementById("tempAriaBar").style.width = tempAriaWidth + "%";

    // Grafico della temperatura dell'asfalto
    let tempAsfaltoWidth = (tempAsfalto / 80) * 100;  // Assuming 80°C as max for asphalt temperature
    if (tempAsfaltoWidth > 100) tempAsfaltoWidth = 100;
    document.getElementById("tempAsfaltoBar").style.width = tempAsfaltoWidth + "%";

    // Aggiungi feedback
    let feedback = '';

    // Feedback sulla temperatura delle gomme
    if (tempGomme < 30) {
        feedback += "<p>Temperatura delle gomme: Bassa, potrebbe influire sulla prestazione.</p>";
    } else if (tempGomme > 120) {
        feedback += "<p>Temperatura delle gomme: Alta, attenzione al surriscaldamento.</p>";
    } else {
        feedback += "<p>Temperatura delle gomme: Ottimale.</p>";
    }

    // Feedback sulla temperatura del motore
    if (tempMotore < 60) {
        feedback += "<p>Temperatura del motore: Bassa, potrebbe non essere al massimo delle prestazioni.</p>";
    } else if (tempMotore > 120) {
        feedback += "<p>Temperatura del motore: Alta, attenzione al rischio di danni.</p>";
    } else {
        feedback += "<p>Temperatura del motore: Ottimale.</p>";
    }

    // Feedback sul carico aerodinamico
    if (caricoAero < 3) {
        feedback += "<p>Carico aerodinamico: Basso, potresti avere una minore stabilità.</p>";
    } else if (caricoAero > 7) {
        feedback += "<p>Carico aerodinamico: Alto, maggiore stabilità ma resistenza all'aria aumentata.</p>";
    } else {
        feedback += "<p>Carico aerodinamico: Ottimale.</p>";
    }

    // Feedback sulla temperatura dell'aria
    if (tempAria < 10) {
        feedback += "<p>Temperatura dell'aria: Fredda, ottima per le prestazioni del motore.</p>";
    } else if (tempAria > 40) {
        feedback += "<p>Temperatura dell'aria: Troppo calda, potrebbe ridurre le prestazioni.</p>";
    } else {
        feedback += "<p>Temperatura dell'aria: Ottimale per le prestazioni.</p>";
    }

    // Feedback sulla temperatura dell'asfalto
    if (tempAsfalto < 15) {
        feedback += "<p>Temperatura dell'asfalto: Bassa, potrebbe ridurre l'aderenza.</p>";
    } else if (tempAsfalto > 60) {
        feedback += "<p>Temperatura dell'asfalto: Alta, attenzione all'aderenza e al degrado degli pneumatici.</p>";
    } else {
        feedback += "<p>Temperatura dell'asfalto: Ottimale per le prestazioni.</p>";
    }

    // Mostra il feedback
    document.getElementById("feedback").innerHTML = feedback;

    // Mostra la sezione dei risultati
    document.getElementById("resultSection").style.display = '
