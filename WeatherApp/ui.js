export function updateWeatherUI(data) {
  const cityNameEl = document.getElementById("cityName");
  const tempEl = document.getElementById("temperature");
  const descEl = document.getElementById("description");
  const iconEl = document.getElementById("weatherIcon");
  const displayEl = document.getElementById("weatherDisplay");

  if (!data) {
    cityNameEl.textContent = "Keine Daten vorhanden.";
    tempEl.textContent = "";
    descEl.textContent = "";
    iconEl.src = "";
    return;
  }

  console.log("!");

  cityNameEl.textContent = data.location.name;
  tempEl.textContent = `Temperatur: ${data.current.temp_c} °C`;
  descEl.textContent = data.current.condition.text;
  iconEl.src = `https://${data.current.condition.icon}`;

  displayEl.classList.remove("d-none");
}
