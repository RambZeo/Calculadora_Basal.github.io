let form = document.getElementById('calculadora');
form.style.backgroundColor = 'white';
const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MANT = document.getElementById("mant")
const MAN = document.getElementById('man');
const MAN15 = document.getElementById('man1500');
const MAN20 = document.getElementById('man2000');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO>0 && DATO<=30){
        ERROR.style.display = 'none';
        let flujo = calcFlujo(DATO);
        let flujo2 = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = "Volumen Diario: " + flujo + ' cc';
        MANT.innerHTML = "Mantenimiento: " + Math.round(flujo/24) + " cc/h";
        MAN.innerHTML = 'Mantenimiento Medio: ' + Math.round(mantenimiento/24) + ' cc/h';
        FLU.style.display = 'block';
        MANT.style.display = 'block';
        MAN.style.display = 'block';
    }
    else {
        FLU.style.display = 'none';
        MANT.style.display = 'none';
        MAN.style.display = 'none';
    }
    if(DATO>30){
        ERROR.style.display = 'none';
        let flujo2 = calcFlujo2(DATO);
        MAN15.innerHTML = "Superficie Corporal x 1500: " + Math.round(flujo2*1500) + ' cc';
        MAN20.innerHTML = "Superficie Corporal x 2000: " + Math.round(flujo2*2000) + " cc";
        FLU.style.display = 'none';
        MANT.style.display = 'none';
        MAN.style.display = 'none';
        MAN15.style.display = 'block';
        MAN20.style.display = 'block';
    }
    else {
        ERROR.style.display = 'block';
        MAN15.style.display = 'none';
        MAN20.style.display = 'none';
    }
    if (DATO>0){
        ERROR.style.display = "none"
    }
})
function calcFlujo(peso){
    let flujo = 0;
    if (peso<=10){
        let aux = 100;
        flujo = (aux*peso);
    } if (peso<=20 && peso>10){
        let base = peso-10;
        let aux = 50;
        let ccbase = 1000;
        let cc50 = (aux*base);
        flujo = ccbase+cc50;
    }if (peso<=30 && peso>20){
        let base = peso-20;
        let aux = 20;
        let ccbase = 1500;
        let cc20 = (aux*base);
        flujo = ccbase+cc20;
    }
    return flujo;
}
function calcFlujo2(peso){
    let flujo2 = 0;
    if (peso>30){
        let aux = peso*4;
        let aux1 = parseInt(aux) + parseInt(7);
        let aux2 = parseInt(peso) + parseInt(90);
        flujo2 = aux1/aux2;
    }
    return flujo2;
}
