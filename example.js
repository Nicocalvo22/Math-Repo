function calcularCostoGas() {

    let x = parseInt(prompt("¿Cuántos m3 tiene su vivienda?"));

    if (x >= 0 && x <= 1) {

        alert("Debe pagar $900");

    } else if (x > 1 && x <= 50) {

        alert("Debe pagar $1650");

    } else if (x > 50 && x <= 150) {

        alert("Debe pagar $3650");

    }
}

const boton = document.getElementById("button")

boton.addEventListener("click", (event)=> {
    event.preventDefault()

    calcularCostoGas();

})