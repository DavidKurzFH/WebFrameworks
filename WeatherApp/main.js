import { setWeatherData, getWeatherData } from "./state.js";
import { updateWeatherUI } from "./ui.js";

const API_KEY = "c1dc84d8bfce46b29a160501250804"

document.getElementById("fetchWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    alert("Bitte gib eine Stadt ein.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=de`
    );

    if (!response.ok) {
      throw new Error("Stadt nicht gefunden.");
    }
    
    const data = await response.json();
    setWeatherData(data);
    updateWeatherUI(getWeatherData());
  } catch (error) {
    alert("Fehler beim Abrufen der Wetterdaten: " + error.message);
  }
});
