export const state = {
    weather:null,
}

export function setWeatherData(data) {
    state.weather = data
}

export function getWeatherData() {
    return state.weather
}