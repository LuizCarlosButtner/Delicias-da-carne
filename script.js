const celulas = document.getElementById("container")
const celula = document.querySelectorAll(".celula")

let idx = 0 ;

let carrossel =()=>{
    ind++;

    if(idx > celula.length - 1){
        idx = 0;
    }

    celula.style.transform - `translateX(${-idx * 275}px)`
}

// setInterval(carrossel, 1800);
