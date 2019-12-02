// Validação dos campos de evento

function checkName(name) {
    if (name.length >= 3) {
        return name.toLowerCase() !== name.toUpperCase();
    } else {
        return false;
    }
}

function checkDatetime(datetime) {
    const today = new Date();
    return datetime.getDay() > today.getDay();
}

function checkDescription(description) {
    return description.length <= 255;
}

function checkValue(value) {
    return typeof value === "float";    
}