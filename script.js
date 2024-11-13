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
    // Imposta il colore della barra delle gomme
    setBarColor("tempGommeBar", tempGomme, 30, 120);

    // Grafico della temperatura del motore
    let tempMotoreWidth = (tempMotore / 150) * 100;
    if (tempMotoreWidth > 100) tempMotoreWidth = 100;
    document.getElementById("tempMotoreBar").style.width = tempMotoreWidth + "%";
    // Imposta il colore della barra del motore
    setBarColor("tempMotoreBar", tempMotore, 60, 120);

    // Grafico del carico aerodinamico
    let caricoAeroWidth = (caricoAero / 10) * 100;
    if (caricoAeroWidth > 100) caricoAeroWidth = 100;
    document.getElementById("caricoAeroBar").style.width = caricoAeroWidth + "%";
    // Imposta il colore della barra del carico aerodinamico
    setBarColor("caricoAeroBar", caricoAero, 3, 7);

    // Grafico della temperatura dell'aria
    let tempAriaWidth = (tempAria / 50) * 100;
    if (tempAriaWidth > 100) tempAriaWidth = 100;
    document.getElementById("tempAriaBar").style.width = tempAriaWidth + "%";
    // Imposta il colore della barra della temperatura dell'aria
    setBarColor("tempAriaBar", tempAria, 10, 40);

    // Grafico della temperatura dell'asfalto
    let tempAsfaltoWidth = (tempAsfalto / 80) * 100;
    if (tempAsfaltoWidth > 100) tempAsfaltoWidth = 100;
    document.getElementById("tempAsfaltoBar").style.width = tempAsfaltoWidth + "%";
    // Imposta il colore della barra della temperatura dell'asfalto
    setBarColor("tempAsfaltoBar", tempAsfalto, 20, 60);

    // Aggiungi feedback
    let feedback = '';

    // Feedback sulla temperatura delle gomme
    if (tempGomme < 30) {
        feedback += "<p class='low'>Temperatura delle gomme: Bassa, potrebbe influire sulla prestazione.</p>";
    } else if (tempGomme > 120) {
        feedback += "<p class='high'>Temperatura delle gomme: Alta, attenzione al surriscaldamento.</p>";
    } else if (tempGomme >= 30 && tempGomme <= 50) {
        feedback += "<p class='warning'>Temperatura delle gomme: Intermedia, monitorare le prestazioni.</p>";
    } else {
        feedback += "<p class='optimal'>Temperatura delle gomme: Ottimale.</p>";
    }

    // Feedback sulla temperatura del motore
    if (tempMotore < 60) {
        feedback += "<p class='low'>Temperatura del motore: Bassa, potrebbe non essere al massimo delle prestazioni.</p>";
    } else if (tempMotore > 120) {
        feedback += "<p class='high'>Temperatura del motore: Alta, attenzione al rischio di danni.</p>";
    } else if (tempMotore >= 60 && tempMotore <= 90) {
        feedback += "<p class='warning'>Temperatura del motore: Intermedia, monitorare l'efficienza.</p>";
    } else {
        feedback += "<p class='optimal'>Temperatura del motore: Ottimale.</p>";
    }

    // Feedback sul carico aerodinamico
    if (caricoAero < 3) {
        feedback += "<p class='low'>Carico aerodinamico: Basso, potresti avere una minore stabilità.</p>";
    } else if (caricoAero > 7) {
        feedback += "<p class='high'>Carico aerodinamico: Alto, maggiore stabilità ma resistenza all'aria aumentata.</p>";
    } else if (caricoAero >= 3 && caricoAero <= 5) {
        feedback += "<p class='warning'>Carico aerodinamico: Intermedio, buona stabilità ma attenzione alla resistenza.</p>";
    } else {
        feedback += "<p class='optimal'>Carico aerodinamico: Ottimale.</p>";
    }

    // Feedback sulla temperatura dell'aria
    if (tempAria < 10) {
        feedback += "<p class='optimal'>Temperatura dell'aria: Fredda, ottima per le prestazioni del motore.</p>";
    } else if (tempAria > 40) {
        feedback += "<p class='high'>Temperatura dell'aria: Troppo calda, potrebbe ridurre le prestazioni.</p>";
    } else if (tempAria >= 25 && tempAria <= 32) {
        feedback += "<p class='warning'>Temperatura dell'aria: Intermedia, ottima per la guida ma monitorare.</p>";
    } else {
        feedback += "<p class='optimal'>Temperatura dell'aria: Ottimale per le prestazioni.</p>";
    }

    // Feedback sulla temperatura dell'asfalto
    if (tempAsfalto < 20) {
        feedback += "<p class='low'>Temperatura dell'asfalto: Bassa, rischio di perdita di aderenza.</p>";
    } else if (tempAsfalto > 60) {
        feedback += "<p class='high'>Temperatura dell'asfalto: Alta, attenzione al degrado delle gomme.</p>";
    } else if (tempAsfalto >= 30 && tempAsfalto <= 40) {
        feedback += "<p class='warning'>Temperatura dell'asfalto: Intermedia, ottima per la prestazione ma monitorare.</p>";
    } else {
        feedback += "<p class='optimal'>Temperatura dell'asfalto: Ottimale.</p>";
    }

    // Mostra feedback
    document.getElementById("feedback").innerHTML = feedback;
    document.getElementById("resultSection").style.display = "block";
}

function setBarColor(barId, value, minValue, maxValue) {
    let bar = document.getElementById(barId);
    let percentage = (value - minValue) / (maxValue - minValue) * 100;
    if (percentage <= 20) {
        bar.style.backgroundColor = "#ff5722"; // Rosso
    } else if (percentage <= 70) {
        bar.style.backgroundColor = "#ffeb3b"; // Giallo
    } else {
        bar.style.backgroundColor = "#4caf50"; // Verde
    }
}
