let nimiAr = []


document.getElementById("form1").addEventListener("submit", formSubmit);

function formSubmit(event){
    nimiAr.push(document.getElementById("input1").value)
    let maara = 10 - nimiAr.length
    if (nimiAr.length > 9){
        console.log("hii")
    }

    event.preventDefault()
    document.getElementById("kaveriMaara").innerHTML = "Vielä "+ maara + " kaveria"
}
