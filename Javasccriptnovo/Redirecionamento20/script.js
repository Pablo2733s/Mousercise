const clickdeButtons = [];
const imageStates = {};
function Nova(ptnnumber) {
    const nova4 = document.querySelector('img[src="/checkmark' + ptnnumber + '.gif"]');
    if (nova4) {
        if (!imageStates[ptnnumber]) {
            nova4.classList.add("Botao");
            imageStates[ptnnumber] = true;

            if (!clickdeButtons.includes(ptnnumber)) {
                clickdeButtons.push(ptnnumber);
            }
        }
    }
    if (clickdeButtons.length === 3) {
        Nova2();
    }
}

function Nova2() {
    const nova5 = document.querySelector('img[src="/continue.gif"]');
    if (nova5) {
        nova5.classList.remove("Botao");
    }
}
let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click20",contador  )

}