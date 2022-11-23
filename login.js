var url = ''
var xhr = new XMLHttpRequest();

const botao = document.querySelector('.enviar')
if(botao)
{
    botao.addEventListener('click', (event) => {
        event.preventDefault()

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;
        
            if (this.status == 200) {
                const data = this.responseText;

                console.log(data)
        
                if(data == 'Success'){
                    localStorage.setItem("loggedIn", "true")
                    localStorage.setItem("username", user.value)
                    
                    if(localStorage.getItem("username") == "admin")
                    {
                        window.location.replace("./connect/api-test.html")
                    }
                    else{
                        window.location.replace('./conta.html')
                    }
                }
                else{
                    localStorage.setItem("loggedIn", "false")
                    senhaIncorreta.setAttribute("style", "display: block;")
                }
            }

            if(this.status == 400){
                localStorage.setItem("loggedIn", "false")
                nomeIncorreto.setAttribute("style", "display: block;")
            }
        }

        const user = document.querySelector('#user')
        const pass = document.querySelector('#password')
        const nomeIncorreto = document.querySelector("#nomeUsuario")
        const senhaIncorreta = document.querySelector("#senhaUsuario")
        
        xhr.open("POST", url, true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(
            {
                username: user.value,
                password: pass.value
            }
        ))
    })
}