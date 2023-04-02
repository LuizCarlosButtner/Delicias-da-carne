let marcarTodos = document.querySelector("#todos")
let todosElementos = document.querySelector("#divTeste")
const elementos = todosElementos.children



let turnOnOffTodos =()=>{
    if(marcarTodos.classList.contains("checked")){
        for(let i = 0; i < elementos.length; i++){
            elementos[i].classList.remove("checked")
        }
    }else {
        for(let i = 0; i < elementos.length; i++){
            elementos[i].classList.add("checked")
        }
        marcarTodos.classList.remove("umElementoClicado")
        marcarTodos.classList.add("checked")
    }
}




// let turnOnOff=(a)=>{
//     a.classList.toggle("checked")
//     let interruptor = 0
//     for(let i = 1;i< elementos.length;i++){
//         if(elementos[i].classList.contains("checked") == true){
//             interruptor++
//         } else {
//             interruptor--
//         }
//     }
//     switch(interruptor){
//         case -1: 
//             marcarTodos.classList.remove("checked")
//             marcarTodos.classList.add("umElementoClicado")
//             break;
//         case 1:
//             marcarTodos.classList.remove("checked")
//             marcarTodos.classList.add("umElementoClicado")
//             break;
//         case -3:
//             marcarTodos.classList.remove("checked")
//             marcarTodos.classList.remove("umElementoClicado")
//             break;
//         case 3:
//             marcarTodos.classList.remove("umElementoClicado")
//             marcarTodos.classList.add("checked")
//             break;
//     }
// }







