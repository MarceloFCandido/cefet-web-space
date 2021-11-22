let buttons = Array.from(document.querySelectorAll('.botao-expandir-retrair'))

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        button.parentElement.classList.toggle("expandido")
    })
})