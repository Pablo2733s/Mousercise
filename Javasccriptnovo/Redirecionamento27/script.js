function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'red';
}
function onDragOver(event) {
    event.preventDefault();
}
function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    const NarutoElement = document.getElementById(id);
    const Kyubi = event.target;
    Kyubi.appendChild(NarutoElement);
    event.dataTransfer.clearData();
}
function onDrop(event) {
    const id = event.dataTransfer.getData('text/plain');
    const NarutoElement = document.getElementById(id);
    const Kyubi = event.target;
    if (Kyubi.classList.contains('Quadradolaranja')) {
        Kyubi.appendChild(NarutoElement);
        event.dataTransfer.clearData();
        const botaoContinue = document.getElementById('botaoContinue');
        botaoContinue.style.display = 'block';
    }
}

let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click27",contador  )

}
