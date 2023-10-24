const checkboxes = document.querySelectorAll('.checkbox');
const continueButton = document.getElementById('continueButton');

function checkIfAllChecked() {
    const allChecked = [...checkboxes].every((radio) => radio.checked);

    if (allChecked) {
        continueButton.style.display = 'block';
    } else {
        continueButton.style.display = 'none';
    }
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', checkIfAllChecked);
});

let contador = 0 
const html = document.querySelector("html")
html.addEventListener("click", contarclicks)
function contarclicks() {
    contador++
    localStorage.setItem("click30",contador  )

}
