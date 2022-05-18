import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToFeed, goToSignUpAdressPage, goToSignUpPage } from "../routes/coordinator";


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
            goToFeed(navigate)
        }
        clear()
    })
    .catch((err)=>{
        console.log("deu erro no login")
        console.log(err.res)
        

    })
    
}

export const signUp = (body,clear,navigate) => {
    axios
    .post(`${BASE_URL}/signup`,body)
    .then((res)=>{
        console.log(res.data)
        localStorage.setItem("token",res.data.token)
        alert("Usuário Cadastrado com Sucesso!")
        goToSignUpAdressPage(navigate)
        clear()
    }).catch((err)=>{
        console.log("deu erro",err.res)
        

    })
    
}



export const signUpAdress = (body,clear,navigate)=>{
    const headers = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }
    axios
    .put(`${BASE_URL}/address`,body,headers)
    .then((res)=>{
        console.log(res.data)
        alert("Endereço criado com sucesso!")
        goToFeed(navigate)
        clear()  
    }).catch((err)=>{
        console.log("deu ruim",err.res)
    })
}