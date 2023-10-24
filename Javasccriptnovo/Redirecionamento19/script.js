const clickdeButtons = [];

function Nova(ptnnumber) {
    const nova2 = document.querySelector('img[src="/btn' + ptnnumber + '-up.gif"]');
    const nova3 = document.querySelector('img[src="/btn' + ptnnumber + '-down.gif"]');
    const nova4 = document.querySelector('img[src="/checkmark' + ptnnumber + '.gif"]');
    
    if (nova2 && nova3) {
        nova2.classList.toggle("Botao");
        nova3.classList.toggle("Botao");
        
        if (nova4) {
            nova4.classList.toggle("Botao");
        }
    }
    
    if (!clickdeButtons.includes(ptnnumber)) {
        clickdeButtons.push(ptnnumber);
    }
    
    if (clickdeButtons.length === 11) {
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
    localStorage.setItem("click19",contador  )

}