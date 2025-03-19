document.getElementById("formi").addEventListener("submit", formSubmit);

function formSubmit(event){
    event.preventDefault()
    document.getElementById("kaveriMaara").innerText = "9 enaan"
}
