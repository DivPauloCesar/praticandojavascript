//Interagindo com partes do HTML (DOM)//
// innerHTML = altera o conteudo, adicionando html e texto//

function dados (){
    let nome=window.prompt("Qual é o seu nome?");
    let res=document.getElementById("resultado");
    res.innerHTML =`<p>Olá <strong>${nome}</strong>! é um grande prazer em te conhecer!`;
}
dados()