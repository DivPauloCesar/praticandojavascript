alert("Seja bem-vindo(a) ao meu site!")

function final(){
   let numero=Number(window.prompt("Digite um numero"));
   let res=document.getElementById("resultado");
   res.innerHTML=`<p>O dobro de ${numero} é ${numero*2} e a metado é ${numero/2}`;
}
final()

