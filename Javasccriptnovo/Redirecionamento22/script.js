function nova() {
window.alert("Do you want to continue to the next page?")
}
let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click22",contador  )

}