function somandoNumeros(){
   let number1=Number( window.prompt("Digite um numero"))
   let number2=Number(window.prompt("Digite outro numero"))
   res=document.getElementById("resultado")
   res.innerHTML=`<p> A soma entre <mark>${number1}</mark> e <mark>${number2}</mark> é igual a <strong>${number1+number2}</strong>`

}