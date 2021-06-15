document.querySelector("svg").addEventListener("click", tourne);

function tourne(){
    document.querySelector("svg").classList.toggle("flechette")

    document.querySelector(".MenuAvant").classList.toggle("MenuApres")
}

console.log(document.querySelector(".fleche"))


document.querySelector(".twitter").addEventListener("click", twite)

function twite(){
    this.classList.toggle("twitter2")
    document.querySelector(".twitt").classList.toggle("twitt2")
}