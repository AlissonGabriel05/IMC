function calc(event){
    event.preventDefault();
    let KG = document.getElementById('KG').value;
    let CM = document.getElementById('CM').value;
    const M = CM / 100
    const imc = KG / ( M * M )

    console.log(imc)

    document.getElementById('result').innerText = imc.toFixed(2)
}