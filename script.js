document.getElementById('btn-calcular').addEventListener('click', () => {
    const precio = parseFloat(document.getElementById('precio').value);
    const tipoPromo = document.getElementById('promo').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(precio) || precio <= 0) {
        resultado.textContent = "Por favor, ingresa un precio válido.";
        return;
    }

    let descuento = 0;
    if (tipoPromo === 'estudiante') {
        descuento = 0.10;
    } else if (tipoPromo === 'cumple') {
        descuento = 0.15;
    }

    const precioFinal = precio * (1 - descuento);
    resultado.textContent = `Total con descuento: $${precioFinal.toFixed(2)}`;
});
