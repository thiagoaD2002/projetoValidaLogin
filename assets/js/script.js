const btnSubmit = document.querySelector(".btnSubmit")



function dados(){
    const valorUsername = document.querySelector("#iUsuario").value
    const valorEmail = document.querySelector("#iEmail").value
    const valorPassword = document.querySelector("#iSenha").value


    const dadosPessoa = [
        valorUsername,
        valorEmail,
        valorPassword
    ]

    // const dadosPessoa = {
    //     nome: valorUsername,
    //     email: valorEmail,
    //     senha: valorPassword

    // }
    return dadosPessoa
}

const formLogin = document.querySelector(".formLogin")


btnSubmit.addEventListener("click",(evt)=>{
    evt.preventDefault()

    dados()
    
    const dadosEmail = dados()[1].includes("@gmail.com")
    const lengthUsername = dados()[0].length
    const lengthPassword = dados()[2].length

    const textWrondEmail = document.querySelector(".textWrongEmail")
    const textWrongUsername = document.querySelector(".textWrongUsername")
    const textWrongPassword = document.querySelector(".textWrongPassword")


    const Secformulario = document.querySelector(".Secformulario")
    

    if(dadosEmail === true && lengthUsername >= 8 && lengthPassword >= 8){
      Secformulario.classList.remove("SecformularioOn")
      const imgBackground = document.querySelector(".imgBackground")
      imgBackground.classList.add("imgBackgroundLogin")


      const formCreate = document.querySelector(".formCreate")
      formCreate.classList.add("formCreateOff")
      formLogin.classList.add("formLoginOn")
    } else {
      Secformulario.classList.add("SecformularioOn")
    }
 
   dadosEmail === false ? textWrondEmail.style.display = 'block' :  
   textWrondEmail.style.display = 'none'
   
   lengthUsername < 8 ? textWrongUsername.style.display = 'block' : textWrongUsername.style.display = 'none' 
    
   lengthPassword < 8 ?  textWrongPassword.style.display = 'block' : textWrongPassword.style.display = 'none'

})

const btnLogin = document.querySelector(".btnLogin")


btnLogin.addEventListener("click",(evt)=>{
    const iUsername = document.querySelector("#iUsername").value
    const iPassword = document.querySelector("#iPassword").value

    evt.preventDefault()

    const userName = dados()[0]
    const passWord = dados()[2] 

  if(iUsername != userName || iPassword != passWord){
    const textWrond = document.querySelector(".textWrond")
    textWrond.classList.add("textWrondOn")
  } else {
    const server = document.querySelector(".server")
    formLogin.style.display = 'none'
    server.style.display = 'block'
  }
})