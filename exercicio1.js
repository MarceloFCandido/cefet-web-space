
document.getElementById('calcular').addEventListener('click', function (e) {
    let G = Number(document.getElementById('constante').value)
    let M1 = Number(document.getElementById('massa1').value)
    let M2 = Number(document.getElementById('massa2').value)
    let d = Number(document.getElementById('distancia').value)

    let Fgrav = (G * M1 * M2) / (d * d)
    document.getElementById('resultado').value = Fgrav
})


