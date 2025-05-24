document.getElementById("loadBtn").addEventListener("click", async () => {
    const input = document.getElementById("input")
    const output = document.getElementById("output")
    output.innerHTML = "Loading..."
    try {
        const res = await fetch("APICALL")
        const data = await res.json()
        const entries = data.result
    } catch(error) {
        console.error(error)
    }
})