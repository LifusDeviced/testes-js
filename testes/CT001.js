// Validação dos campos de local do evento

function checkName(name) {
    return name.toLowerCase() !== name.toUpperCase();
}

function checkCapacity(capacity) {
    return capacity > 50 && capacity < 50000;
}