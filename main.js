let nimiAr = []


document.getElementById("form1").addEventListener("submit", formSubmit);

function formSubmit(event){
    nimiAr.push(document.getElementById("input1").value)
    let jaljella = 10 - nimiAr.length
    
    document.getElementById("tulostus").innerHTML = nimiAr.join("<br>");
    

    event.preventDefault()
    document.getElementById("kaveriMaara").innerHTML = "Vielä "+ jaljella + " kaveria"
    document.getElementById("input1").value = ""
}
