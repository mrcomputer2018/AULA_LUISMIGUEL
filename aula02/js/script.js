document.addEventListener("submit", pegarDados)

function pegarDados(event) {

    console.log("Formulário enviado")

    event.preventDefault()

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let assunto = document.getElementById("assunto").value
  
    alert(`Nome: ${nome} \nEmail: ${email} \nAssunto: ${assunto}`)

}