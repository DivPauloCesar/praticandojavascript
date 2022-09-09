function calcularMedia(){
    let nome=String(window.prompt("Qual o nome do aluno?"))
    let nota1=Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let nota2=Number(window.prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let media=(nota1+nota2)/2
    res=document.getElementById("resultado")
    res.innerHTML=`<p> Calculando a média de <mark>${nome}</mark>
    <p> As notas obtidas foram <mark>${nota1} e ${nota2}</mark>
    <p> A média final será <mark>${media}</mark>`

}