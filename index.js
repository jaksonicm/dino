const dino=document.querySelector('.dino')
const background=document.querySelector('.background')

function pegareventoteclado(event)
{
    if(event.keycode===32){
        //console.log("tecla espaço pressionado")
        pular()
    }
}
document.addEventListener('keyup',pegareventoteclado)
let position=0;
function pular(){
    position=20
    dino.style.botton=position+'px';
    let subidaIntervalo=setInterval()==>{
        position +=20
    }
}