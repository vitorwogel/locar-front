var coll = document.getElementsByClassName("collapsible")

coll[0].addEventListener("click", function() {
  this.setAttribute('class', 'collapsible hide')
  var content = document.querySelector('.items')
  content.setAttribute('class', 'items show')
  
  coll[1].addEventListener("click", function() {
    var content = document.querySelector('.items')
    content.setAttribute('class', 'items hide')
    coll[0].setAttribute('class', 'collapsible show')
  })
})

if(localStorage.getItem("loggedIn") == "true")
{
  const log = document.querySelectorAll(".login")

  log[0].innerText = "LOGOUT"
  log[1].innerText = "Logout"

  for(i=0; i<2; i++)
  {
    log[i].addEventListener('click', () => {
      localStorage.setItem("loggedIn", "false")
    })
  }
}