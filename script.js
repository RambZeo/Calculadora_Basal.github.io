let form = document.getElementById('calculadora');
form.style.backgroundColor = 'white';
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MANT = document.getElementById("mant")
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = "Volumen Diario: " + flujo + ' cc';
        MANT.innerHTML = "Mantenimiento: " + Math.round(flujo/24) + " cc/h";
        MAN.innerHTML = 'Mantenimiento Medio: ' + Math.round(mantenimiento/24) + ' cc/h';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        MANT.style.display = 'block';
    }else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MANT.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    let flujo = 0;
    if (peso<=10){
        let aux = 100;
        flujo = (aux*peso);
    } 
    if (peso<=20 && peso>10){
        let base = peso-10;
        let aux = 50;
        let ccbase = 1000;
        let cc50 = (aux*base);
        flujo = ccbase+cc50;
    }
    if (peso<=30 && peso>20){
        let base = peso-20;
        let aux = 20;
        let ccbase = 1500;
        let cc20 = (aux*base);
        flujo = ccbase+cc20;
    }
    return flujo;
}
