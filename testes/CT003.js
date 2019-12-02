// Validação dos campos de usuário

function checkName(name) {
    for (letter of name) {
        if (letter.toLowerCase() === letter.toUpperCase()) {
            return false;
        }
    }
    return true;
}

function checkEmail(email) {
    const pattern = email.substr(-10, 10);
    return pattern === "@email.com" ;
}

function checkCPF(cpf) {
    return cpf.length === 14;
}

function checkPhone(phone) {
    return phone.length === 15;
}