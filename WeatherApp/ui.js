export function showWeather(weather) {
    // NUR für das Rendern zuständig, kein API Call
    const output = document.getElementById("result")
    output.innerHTML = "Loading..."
}

export function showError(msg){
    // NUR das ANZEIGEN von Fehler
    const output = document
}