let inputNome = document.getElementById("inputNome")
let inputSobreNome = document.getElementById("inputSobreNome")
let inputEmail = document.getElementById("inputEmail")
let inputTelefone = document.getElementById("inputTelefone")
let radio = document.querySelector(".radio")
let select = document.querySelector(".select")
let checkBox = document.querySelector(".checkBox")


let botao = document.getElementById("btn")
console.log(botao)

botao.onclick=()=>{
  let arroba = inputEmail.value.indexOf("@")
  let ponto = inputEmail.value.indexOf(".")
  let caracter = /[\W_]/

  if(!inputNome.value.length > 0 || !inputSobreNome.value.length > 0){
    alert("campo de nome não pode estar vazio!")
  }else if(inputEmail.value == ''){ 
    alert("preencha o email!")

  } else if(arroba == -1){
    alert("nome precisa ter @")
  } else if(ponto == -1){
    alert("falta o .")
  } else if(arroba > ponto){
    alert("o ponto nao pode estar antes do arroba!")
  } else
   if(
    
    inputEmail.value.search(caracter) < arroba || inputEmail.value.search(caracter) > ponto
    ){
      alert("coloque um caaraacter entre o @ e o '.' ")
  }









  console.log("clicado")
}

