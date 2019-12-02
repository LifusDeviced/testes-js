// Validação dos campos de usuário

function checkNumberCard(numberCard) {
    return numberCard === "4000 0000 0000 0010";
}

function checkCVV(cvv) {
    return typeof cvv === "number";
}

function checkExpirationDate(expirationDate) {
    return typeof expirationDate.getDate === "function";
}