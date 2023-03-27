let inputNome = document.getElementById("inputNome")
let inputSobreNome = document.getElementById("inputSobreNome")
let inputEmail = document.getElementById("inputEmail")
let inputTelefone = document.getElementById("inputTelefone")
let radio = document.querySelector(".radio")
let select = document.querySelector(".select")
let checkBox = document.querySelector(".checkBox")


let botao = document.getElementById("btn")

botao.onclick=()=>{
  const arroba = inputEmail.value.indexOf("@")
  const ponto = inputEmail.value.indexOf(".")
  const caracter = /[\W_]/
// verificacao de email.
  if(!inputNome.value.length > 0 || !inputSobreNome.value.length > 0){
    alert("campo de nome não pode estar vazio!")
  } else if(inputEmail.value == ''){ 
    alert("preencha o email!")
  } else if(arroba == -1){
    alert("nome precisa ter @")
  } else if(ponto == -1){
    alert("falta o .")
  } else if(arroba > ponto){
    alert("o ponto nao pode estar antes do arroba!")
  } else if(ponto == arroba+1){
      alert("coloque um caracter entre o arroba e o ponto")
  } else if(arroba > ponto){
    alert("o ponto tem que ser depois do arroba")
  } else if(inputEmail.value.search(caracter) > arroba && inputEmail.value.search(caracter) < ponto){
    console.log("dentro")
  }

//verificacao de telefone.

  if(inputTelefone.value == ''){
    console.log("o telefone nao pode estar vazio e nao pode ter simbolos")
  } else if(inputTelefone.value.length < 11){
    alert("o campo de telefone deve ter 11 numeros, verifique se o numero esta correto ou se voce colocou o DDD")
  }
}