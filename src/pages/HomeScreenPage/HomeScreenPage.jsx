import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TelaLogo from "../../assets/TelaLogo.png"
import { FullContainer,PageContainer } from "./styled";
import { goToLoginPage } from "../../routes/coordinator";




const HomeScreenPage = () => {


  const navigate = useNavigate()
    
  useEffect(()=>{
      setTimeout(() => {
        goToLoginPage(navigate)
        }, 1500);
  },[])

  return (
      <FullContainer>
          <PageContainer>
              <img src={TelaLogo}/>
          </PageContainer>    
      </FullContainer>
  )
}

export default HomeScreenPage
