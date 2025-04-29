let carrosel_container = document.getElementsByClassName("carrosel-container");

for(i = 0; i < carrosel_container.length ; i++){

    let carrosel = carrosel_container[i];
    let btnBack = carrosel.getElementsByClassName("btnBack")[0];
    let btnNext = carrosel.getElementsByClassName("btnNext")[0];

    let itens = carrosel.getElementsByClassName("img-port");
    let posAnterior = 0;
    let mover = posAnterior + 100;

    btnNext.addEventListener('click', ()=>{
        mover = posAnterior + 100;

        for(let c = 0; c < itens.length; c++){
            itens[c].style.right = mover + '%';

            posAnterior = mover;
        }
    })

    btnBack.addEventListener('click', ()=>{
        mover = posAnterior - 100;

        for(let c = 0; c < itens.length; c++){
            itens[c].style.right = mover + '%';
            posAnterior = mover;
        }
    })


}