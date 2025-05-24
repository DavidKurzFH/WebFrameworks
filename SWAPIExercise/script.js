document.getElementById("loadBtn").addEventListener("click", async () => {
    const output = document.getElementById("output");
    output.innerHTML = "Lade..." // für user-feedback, dass etwas passiert
    
    try{
        // warten, bis daten geladen sind
        const apiResponse = await fetch("https://swapi.dev/api/people")
        // get the json from the API Call "apiResponse"
        const data = await apiResponse.json()
        // get the "results" array inside the json
        const characters = data.results

        
        // Displayed Data: name, height, mass, gender
        const characterCard = characters.map(char => {
            return `
                <div class="character card">
                    <h2>${char.name}</h2>
                    <p>Height: ${char.height}</p>
                    <p>Mass: ${char.mass}</p>
                    <p>Gender: ${char.gender}</p>
                </div>
                `;
        });

        output.innerHTML = characterCard.join("")

    } catch(error) {
        console.error(error)
    }
    
})