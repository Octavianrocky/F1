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

    // Imposta il colore delle barre in base ai valori
    setBarColor("tempGommeBar", tempGomme, 75, 84, 109, 119, "°C", ["#e53935", "#ffeb3b", "#4caf50"]);
    setBarColor("tempMotoreBar", tempMotore, 75, 83, 115, 140, "°C", ["#e53935", "#ffeb3b", "#4caf50"]);
    setBarColor("caricoAeroBar", caricoAero, 0.1, 2, 3.5, 5, "", ["#e53935", "#ffeb3b", "#4caf50"]);
    setBarColor("tempAriaBar", tempAria, 0, 15, 21, 36, "°C", ["#e53935", "#ffeb3b", "#4caf50"]);
    setBarColor("tempAsfaltoBar", tempAsfalto, 0, 12, 17, 42, "°C", ["#e53935", "#ffeb3b", "#4caf50"]);

    // Mostra i risultati
    document.getElementById("resultSection").style.display = "block";
}

// Funzione per calcolare e impostare il colore della barra
function setBarColor(elementId, value, minYellow, maxYellow, minGreen, maxGreen, unit, colors) {
    let percentage = 0;
    let color = colors[0]; // Imposta rosso di default

    if (value < minYellow) {
        percentage = 0; // Rosso
    } else if (value >= minYellow && value <= maxYellow) {
        percentage = ((value - minYellow) / (maxYellow - minYellow)) * 100; // Giallo
        color = colors[1]; 
    } else if (value > maxYellow && value <= minGreen) {
        percentage = ((value - maxYellow) / (minGreen - maxYellow)) * 100; // Giallo sfumato a verde
        color = colors[1];
    } else if (value > minGreen && value <= maxGreen) {
        percentage = ((value - minGreen) / (maxGreen - minGreen)) * 100; // Verde
        color = colors[2]; 
    } else {
        percentage = 100; // Verde intenso
        color = colors[2]; 
    }

    document.getElementById(elementId).style.width = percentage + "%";
    document.getElementById(elementId).style.background = `linear-gradient(90deg, ${color} ${percentage}%, #fff ${percentage}%)`;
    document.getElementById(elementId).style.transition = "width 0.3s, background 0.3s"; 
}
