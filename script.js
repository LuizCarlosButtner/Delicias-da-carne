const celulas = document.getElementById("container")
const celula = document.querySelectorAll(".container .celula")



let idx = 0 ;

let carrossel =()=>{
    idx++;

    if(idx > 10) idx = 0;

    celulas.style.transform = `translateX(${-idx * 314}px)`;
    console.log(idx)
}

setInterval(carrossel, 2000);

   



const celulas2 = document.getElementById("container2")
const celula2 = document.querySelectorAll(".container .celula")




let carrossel2 =()=>{
    idx++;

    if(idx > 10) idx = 0;

    celulas2.style.transform = `translateX(${-idx * 314}px)`;
    console.log(idx)
}

setInterval(carrossel2, 2000);


