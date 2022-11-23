    function calculaValor(valor, tempo, arrayAux)
    {
        if(valor>0 && tempo>0)
        {
            if(tempo<=5)
            {
                if(tempo==1)
                {
                    taxa = 0.09
                }
                else if(tempo==2)
                {
                    taxa = 0.125
                }
                else    taxa = 0.145

                for(i=0; i<tempo; i++)
                {
                    valor += valor*taxa
                    arrayAux[i] = valor
                }

                return valor
            }
            else return 0
        }
        else return -1
    }    

    const botao = document.querySelector('.calcular')
    if(botao)
    {
        botao.addEventListener('click', (event) => {
            event.preventDefault()
            const valor = document.querySelector('#valor')
            const tempo = document.querySelector('#tempo')
            const result = document.querySelector('.result')
            const graph = document.querySelector('.graph')
            const arrayAux = []

            const num_valor = Number(valor.value)
            const num_tempo = Number(tempo.value)
    
            const aux = calculaValor(num_valor, num_tempo, arrayAux)
    
            graph.setAttribute('class', 'graph visible')
            result.setAttribute('class', 'result visible')
    
            if(aux==-1) result.innerText = 'Por favor, digite valores válidos.'
            else if(aux==0) result.innerText = 'O prazo máximo é de 5 anos!'
            else
            {
                result.innerText = 'Rendimento total: R$' + aux.toFixed(2)
                //GRÁFICO
                if(num_tempo>1)
                {
                    var points = []
    
                    points[0] = { y: Number(num_valor.toFixed(2)) }
    
                    for(i=0;i<num_tempo;i++)
                    {
                        points[i+1] = { y: Number(arrayAux[i].toFixed(2)) }
                    }
                }
                else
                {
                    var points = [
                        { y: Number(num_valor.toFixed(2)) },
                        { y: Number(arrayAux[0].toFixed(2)) }
                    ]
                }

                //  RESPONSIVENESS
                if(screen.width<=768)
                {
                    var uiui = "light2"
                }
                else{
                    var uiui = "dark2"
                }

                var chart = new CanvasJS.Chart("chartContainer", {
                    
                    animationEnabled: true,
                    backgroundColor: null,
                    theme: uiui,
                    title:{
                        text: "Rendimentos"
                    },
                    data: [{        
                        type: "line",
                        color: '#FF6952',
                        indexLabelFontSize: 16,
                        dataPoints: points
                    }]
                });
                
                chart.render();
            }            
        })
    }