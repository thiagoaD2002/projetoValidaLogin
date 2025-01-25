const btnSubmit = document.querySelector(".btnSubmit")


console.log(btnSubmit)



btnSubmit.addEventListener("click",(evt)=>{
    evt.preventDefault()

    const valorUsername = document.querySelector("#iUsuario").value
    const valorEmail = document.querySelector("#iEmail").value
    const valorPassword = document.querySelector("#iSenha").value

    const dadosPessoa = {
        nome: valorUsername,
        email: valorEmail,
        senha: valorPassword

    }

    if(dadosPessoa.nome == dadosPessoa.email){
        console.log('oi')
    }

})