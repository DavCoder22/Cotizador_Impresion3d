document.getElementById('cotizadorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const material = document.getElementById('material').value;
    const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    const tiempo = parseFloat(document.getElementById('tiempo').value.replace(',', '.'));
    const precioLuz = parseFloat(document.getElementById('precioLuz').value.replace(',', '.'));
    const impuestoMateriales = parseFloat(document.getElementById('impuestoMateriales').value.replace(',', '.'));

    try {
        if (isNaN(peso) || isNaN(tiempo) || isNaN(precioLuz) || isNaN(impuestoMateriales)) {
            throw new Error('Por favor, ingrese valores válidos.');
        }

        if (peso <= 0 || tiempo <= 0 || precioLuz <= 0 || impuestoMateriales <= 0) {
            throw new Error('Por favor, ingrese valores mayores a cero.');
        }

        let costoMaterial = 0;

        switch (material) {
            case 'pla':
                costoMaterial = peso * 0.05; // Precio por gramo de PLA
                break;
            case 'pteg':
                costoMaterial = peso * 0.06; // Precio por gramo de PTEG
                break;
            case 'plu':
                costoMaterial = peso * 0.07; // Precio por gramo de PLU
                break;
            case 'pbt':
                costoMaterial = peso * 0.08; // Precio por gramo de PBT
                break;
        }

        const costoLuz = tiempo * precioLuz;
        const impuesto = costoMaterial * (impuestoMateriales / 100);
        const total = costoMaterial + costoLuz + impuesto;

        document.getElementById('costoMaterial').textContent = `Costo del material: $${costoMaterial.toFixed(2)}`;
        document.getElementById('costoLuz').textContent = `Costo de luz: $${costoLuz.toFixed(2)}`;
        document.getElementById('impuesto').textContent = `Impuesto de materiales: $${impuesto.toFixed(2)}`;
        document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;

        document.getElementById('resultado').classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('recalcular').addEventListener('click', function() {
    document.getElementById('cotizadorForm').reset();
    document.getElementById('resultado').classList.add('hidden');
});

document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('h1').classList.toggle('dark-mode');
    document.querySelector('#toggleDarkMode').classList.toggle('dark-mode');
    document.querySelector('.result-container').classList.toggle('dark-mode');
});
