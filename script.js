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
    document.getElementById("caricoAeroBar
