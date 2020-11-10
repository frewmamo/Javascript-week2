var Tom = {
    height: 9,
    mass: 8
}

var Jerry = {
    height: 10,
    mass: 45
}

function BMI(mass,height) {
    return mass / height * 2;
}

function checkingBMI() {
    if (BMI(Tom.mass, Tom.height) > BMI(Jerry.mass, Jerry.height)){
        return true
    } else {
        return false
    }
}

console.log(`is Toms BMI higher than Jerrys?`+ checkingBMI());