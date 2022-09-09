function variosCalculos(){
    let numero=Number(window.prompt("Digite um numero:"))
    let raizQuadrada= Math.sqrt(numero)
    let raizCubica=Math.cbrt(numero)
    let elevado=Math.pow(numero,2)

    res=document.getElementById("resultado")
//terminar o codigo a baixo, corrigir valor elevado//
    res.innerHTML=`<p> O número analisado será o <strong>${numero}</strong>
    <hr>
    <p>O seu valor absoluto é ${numero}
    <p>A sua parte inteira é ${numero}
    <p>O valor inteiro mais próximo é ${numero}
    <p>A sua raiz quadrada é ${raizQuadrada}
    <p>A sua raiz cúbica é ${raizCubica}
    <p>O valor de ${numero} é ${numero*numero}
    `
}
