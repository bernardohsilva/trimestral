let resultado = result;

const somar = function(){
    let altura = document.getElementById ('altura').value
    let peso = document.getElementById ('peso').value
    z = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2)
    if (z < 18.5) {
        z+=" MAGREZA"
    } 
    else if (z > 18.5 && z < 24.9) {
        z+=" NORMAL"
    } 
    else if (z > 25.0 && z <  29.9) {
        z+=" SOBREPESO"
    } 
    else if (z > 30.0 && z <  39.9) {
        z+=" OBESIDADE"
    } 
    else {
        z+=" OBESIDADE-GRAVE"
    }
    document.getElementById('result').value = z

}

const ApagaNumeros = function(){
    document.getElementById ('altura').value = ""
    document.getElementById ('peso').value = ""
    document.getElementById('result').value = ""
}
