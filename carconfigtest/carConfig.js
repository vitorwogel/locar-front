const date = new Date()

const config = {
    horaInicial: date.getHours(),
    minutoInicial: date.getMinutes(),
    kmCarro1: 172476
}

function iniciaContagem(){
    const aux = new Date()

    h1.innerText = ''

    if(date.getHours() == aux.getHours() && 
        date.getMinutes() == aux.getMinutes()){

        const search = document.querySelector('#dom')

        search.innerHTML = '<h1>Um dia se passou</h1>'

        //iniciaContagem()
    }
    else{
        setTimeout(() => {

            const clock1 = document.querySelector('#clock1')
            const clock2 = document.querySelector('#clock2')

            clock1.innerHTML = '<h3>DATE:  '+ date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'</h3>'
            clock2.innerHTML = '<h3>AUX:  '+ aux.getHours()+':'+aux.getMinutes()+':'+aux.getSeconds()+'</h3>'

            iniciaContagem()
        }, 1000)
    }
}

const h1 = document.querySelector('#dom')
h1.innerHTML = '<h1>Aguarde 1 minuto</h1>'

setTimeout(() => {iniciaContagem()}, 60000)