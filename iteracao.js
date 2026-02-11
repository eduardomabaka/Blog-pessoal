var load = document.getElementById("loading")
var corpo = document.getElementById("corpo")
var footer = document.getElementById("f")
function show(){
    var mostrar = document.getElementById("show")
    if (mostrar.style.display == "none"){
        mostrar.style.display = "flex"
    }else{
        mostrar.style.display = "none"
    }
}
function notshow(){
    var mostrar = document.getElementById("show")
    if (mostrar.style.display == "flex"){
        mostrar.style.display = "none"
    }
}

setTimeout(()=>{
    corpo.style.display="none"
    footer.style.display="none"
    load.style.display="block"
},0)
setTimeout(()=>{
    corpo.style.display="flex"
    footer.style.display="flex"
    load.style.display="none"
},3000)