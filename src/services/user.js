import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToHomeScreenPage, goToSignUpPage } from "../routes/coordinator";


export const login = (body,clear,navigate) =>{
    axios
    .post(`${BASE_URL}/login`,body)
    .then((res)=>{
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
        
        if(res.data.user.hasAdress === false) {
            alert(`Olá ${res.data.user.name} Você não possui login estamos te redirecionando para tela de cadastro...`)
            goToSignUpPage(navigate)
        }else{
            alert("Bem vindo")
            goToHomeScreenPage(navigate)
        }
        clear()
    })
    .catch((err)=>{
        console.log("deu erro no login")
        console.log(err.res)
        

    })
    
}