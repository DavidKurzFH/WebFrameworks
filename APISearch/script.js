document.getElementById("searchBtn").addEventListener("click", async () => {

    const input = document.getElementById("searchInput").value.trim().toLowerCase()
    const resultDiv = document.getElementById("result")
    resultDiv.innerHTML = "Searching..."

    if (input === ''){
        resultDiv.innerHTML = "Please fill the search query!"
        return
    }

    try {
        const res = await fetch(`https://swapi.dev/api/people/?search=${input}`)
        const data = await res.json()

        if (data.count === 0){
            resultDiv.innerHTML = "No Data found!"
            return
        }

        const firstChar = data.results[0]
        resultDiv.innerHTML = `
            <div>
                <h2>${firstChar.name}</h2>
                <p>Height: ${firstChar.height} cm</p>
                <p>Mass: ${firstChar.mass} kg</p>
                <p>Gender: ${firstChar.gender}</p>
            </div>
        `;

    } catch(error) {
        console.error(error)
    }
})