var url = ''
var xhr = new XMLHttpRequest();

const sair = document.querySelector(".sair")
sair.addEventListener('click', () => {
    localStorage.setItem("loggedIn", "false")
})

const nome = document.querySelector('#nome')
const valorfinal = document.querySelector('#valorfinal')
const valorinicial = document.querySelector('#valorinicial')
const rentabilidade = document.querySelector('#rentabilidade')
const dataResgate = document.querySelector('#data')

const graphValues = []

if(localStorage.getItem("loggedIn") == "true")
{

    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
    
        if (this.status == 200) {
            const data = JSON.parse(this.responseText);
    
            console.log(data)
    
            nome.innerText = data.name
            valorinicial.innerText = data.value            
            rentabilidade.innerText = Number(data.rentability)*100 + '%'
    
            const anoResgate = Number(data.date.year) + Number(data.time) - 1
            dataResgate.innerText = data.date.day+'/'+data.date.month+'/'+anoResgate
            
            graphValues[0] = Number(data.value)

            for(i=1; i<Number(data.time); i++)
            {
                graphValues[i] = graphValues[i-1] + graphValues[i-1]*Number(data.rentability)
            }

            valorfinal.innerText = Number(graphValues[Number(data.time)-1]).toFixed(2)

            graph()
        }
    }
    
    xhr.open("POST", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(
        {
            username: localStorage.getItem("username")
        }
    ))
}
else{
    window.location.replace('./login.html')
}

//  GRAPH

function graph() {

    let points = []
    for(i=0; i<graphValues.length; i++)
    {
        points[i] = Number(graphValues[i]).toFixed(2)
        points[i] = Number(points[i])
        points[i] = { y: points[i] }
    }
        
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        /*
        title:{
            text: "Simple Line Chart"
        },
        */
        axisY: {
            gridThickness: 0
        },
        data: [{        
            type: "line",
            color: "#ea5f21",
            indexLabelFontSize: 16,
            dataPoints: points
        }]
    });
    chart.render();
    
}
