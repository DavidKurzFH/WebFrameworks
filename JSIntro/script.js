document.addEventListener("DOMContentLoaded", function(){
    console.log("js loaded");
    const button = document.getElementById("changeBtn")
    const headline = document.getElementById("headline")
    const ausgabe = document.getElementById("ausgabe")

    button.addEventListener("click", function(){
        headline.innerHTML = "Guten Morgen";
        headline.style.color = "red";
        ausgabe.innerText = "Ausgabe geändert"
    })

    document.getElementById("darkModeBtn").addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
    })

});