 function calcularMelhorPreco(){

  //Validar os campos
  let precoAlcool = document.getElementById('alcool').value
  let precoGasolina = document.getElementById('gasolina').value

  if(precoAlcool != ""){
    if (precoGasolina != "") {
      /*Calcular se é melhor usar alcool ou gasolina
        *se valorAlcool / valorGasolina >= 0.7 é melhor 
        utilizar gasolina
        *senao é melhor utilizar alcool
      */
      let resultado = precoAlcool / precoGasolina
      if(resultado >= 0.7){
        //alert("É melhor utilizar gasolina")
        document.getElementById('resultado').innerHTML ="É melhor utilizar gasolina"
      }else{
        //alert("É melhor utilizar alcool")
        document.getElementById('resultado').innerHTML ="É melhor utilizar alcool"
      }

    }else{
      alert("Digite o preço da gasolina")
    }

  }else{
    alert("Digite o preço do alcool")
  }
}
