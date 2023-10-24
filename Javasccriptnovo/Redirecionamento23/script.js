let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click23",contador  )

}