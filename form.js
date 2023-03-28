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
  } else if(inputTelefone.value.length !== 11){
    alert("o campo de telefone deve ter 11 numeros, verifique se o numero esta correto ou se voce colocou o DDD")
  } else if(inputTelefone.value.search(caracter) >= 0){
    alert("tem um caractere dentro do numero")
  }
  console.log("enviou!!!!")
}

// =------------------------------select button

let a = document.querySelector("table")
let seta = document.querySelector("#seta")
let vazia = document.querySelector("#vazia")
let primeira = document.querySelector("#primeira")
let b = document.getElementsByTagName("td")
let svg = '<svg id="seta" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>'

// =------------------------------select button
vazia.onclick =()=>{ 
  hide()
  mudaSeta()
}

function esse(a){
  let teste = a.innerText  
  vazia.innerText = teste
  vazia.innerHTML += svg
  hide()
  document.querySelector("#seta").classList.toggle("viraVira")
  document.querySelectorAll("tr td").forEach((elem)=>{
    elem.removeAttribute("style")
  })
  a.style.display = "none"
}

const hide=()=>{
    for(let i = 1;i < b.length; i++){
     b[i].classList.toggle("hide")
  }
  document.querySelector("#seta").classList.toggle("viraVira")
}
// =------------------------------select button



// -------------------------------radio button
let radioClicado =(inde)=>{
  document.querySelectorAll(".bola").forEach((elem)=>{
    elem.classList.remove("bolaMarcada")
  })
  inde.classList.add("bolaMarcada")
}
// -------------------------------radio button



// -----------------------------------checkBox
let todosOsMeios =(elem)=>{
  if(elem.classList.contains("marcado")){
    for(let i = 0;i<3;i++){
      document.querySelectorAll(".checkList div li div")[i].classList.remove("marcado")
    }
    calculador = 0
  } else {
    elem.classList.add("marcado")
    for(let i = 1;i<3;i++){
      document.querySelectorAll(".checkList div li div")[i].classList.add("marcado")
    }
    calculador = 2
  }
  console.log(calculador)
}



let calculador = 0;
let checkClique =(elem)=>{
  if(elem.classList.contains("marcado")){
    elem.classList.remove("marcado");
    calculador--
  } else {
    elem.classList.add("marcado")
    calculador++
  }
  
  if(calculador == 0){
    document.querySelectorAll(".checkList div li div")[0].innerText = ''
    for(let i = 0;i<3;i++){
      document.querySelectorAll(".checkList div li div")[i].classList.remove("marcado")
    }
  } else if(calculador == 1){
    document.querySelectorAll(".checkList div li div")[0].innerText = "-";
    document.querySelectorAll(".checkList div li div")[0].classList.remove("marcado")
  } else if(calculador == 2){
    document.querySelectorAll(".checkList div li div")[0].innerText = ''
    for(let i = 0;i<3;i++){
      document.querySelectorAll(".checkList div li div")[i].classList.add("marcado")
    }
  }
  console.log(calculador)
}
// -----------------------------------checkBox
