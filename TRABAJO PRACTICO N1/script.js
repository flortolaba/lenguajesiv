document.getElementById('btn-abrir').addEventListener('click', () => {

    const inputNombre = document.getElementById('nombre-ubicacion');
    const inputLatitud = document.getElementById('latitud');
    const inputLongitud = document.getElementById('longitud');

    let nombre = inputNombre.value.trim();
    let latRaw = inputLatitud.value.trim();
    let lngRaw = inputLongitud.value.trim();

    if (!nombre) nombre = inputNombre.placeholder || "Ubicación";
    if (!latRaw) latRaw = inputLatitud.placeholder;
    if (!lngRaw) lngRaw = inputLongitud.placeholder;

    const lat = latRaw.replace(',', '.');
    const lng = lngRaw.replace(',', '.');

    const latNum = parseFloat(lat);
    const lngNum = parseFloat(lng);

    if (isNaN(latNum) || isNaN(lngNum)) {
        alert('Por favor, ingresa coordenadas numéricas válidas.');
        return;
    }

    if (latNum < -90 || latNum > 90 || lngNum < -180 || lngNum > 180) {
        alert('La latitud debe estar entre -90 y 90. La longitud debe estar entre -180 y 180.');
        return;
    }

    const url = `https://www.google.com/maps/search/?api=1&query=${latNum},${lngNum}`;

    window.open(url, '_blank');
});