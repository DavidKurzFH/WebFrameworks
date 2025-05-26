import { state } from "./state.js"
import { showWeather, showError } from "./ui.js"
// c1dc84d8bfce46b29a160501250804

document.getElementById("loadBtn").addEventListener("click", async () => {
    const input = document.getElementById("input")

    if (input === ''){
        const error = "Empty query"
        showError(error)
    }
})