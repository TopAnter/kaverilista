let nimiAr = []
let nimiAr2 = []
const listElement = document.getElementById("tulostus");
const listElement2 = document.getElementById("tulostus2");


document.getElementById("form1").addEventListener("submit", formSubmit);


function formSubmit(event){
    if(nimiAr.length == 10){
        document.getElementById("kaveriMaara").innerHTML = "Lista Täynnä!"
        event.preventDefault()
        return
    }

    nimiAr.push(document.getElementById("input1").value)
    let jaljella = 10 - nimiAr.length

    const li = document.createElement("li");
    let kaveri = nimiAr[nimiAr.length - 1]
    li.textContent = kaveri;
    listElement.appendChild(li);
    
    

    event.preventDefault()
    document.getElementById("kaveriMaara").innerHTML = "Vielä "+ jaljella + " kaveria"
    document.getElementById("input1").value = ""
}

document.getElementById("form2").addEventListener("click", function(event){

    if (document.getElementById("input2").value == "" && event.target.id != "kaveriJarjesta"){
        event.preventDefault()
        return
    }

    if(event.target.id == "kaveriLisaa"){
        nimiAr2.push(document.getElementById("input2").value)
    }
    if(event.target.id == "kaveriPoista"){
        nimiAr2 = nimiAr2.filter(nimi => nimi !== document.getElementById("input2").value)
    }
    if(event.target.id == "kaveriJarjesta"){
        nimiAr2 = nimiAr2.sort()
    }
    listElement2.innerHTML = ""
    nimiAr2.forEach(kaveri =>{
        const li = document.createElement("li");
        li.textContent = kaveri;
        listElement2.appendChild(li);
    })
    document.getElementById("input2").value = ""
    event.preventDefault()
});