import React, { useEffect, useState } from "react";
import useRequestData from "../../hooks/useRequestData";
import Edit from "../../assets/edit.png";

import {
  AddressDiv,
  AddressTitle,
  ButtonStyled,
  Container,
  CPF,
  DatesDiv,
  Email,
  History,
  HistoryDiv,
  HistoryTitle,
  Img,
  Path,
  ProfileDetails,
  StyledButton,
  UserName,
} from "./styled";
import { useNavigate } from "react-router-dom";
import {
  goToEditProfilePage,
  goToEditAdressPage,
} from "../../routes/coordinator";
import { Loading } from "../../components/Loading/Loading";
import Historic from "../../"; // aguardando o codigo do historico
import axios from "axios";
import { BASE_URL } from "../../constants/url"

const ProfilePage = () => {
  const { data, isLoading } = useRequestData({}, "/profile");
  const [dataHistory, setDataHistory] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const orderHistory = () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .get(`${BASE_URL}/orders/history`, headers)
      .then(({ data }) => {
        setDataHistory(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
    orderHistory();
  }, []);
  const convertMonth = (month) => {
    switch(month){
        case 1:
            return "Janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
        case 6:
            return "Junho"
        case 7:
            return "Julho"
        case 8:
            return "Agosto"
        case 9:
            return "Setembro"
        case 10:
            return "Outubro"
        case 11:
            return "Novembro"
        case 12:
            return "Dezembro"
        default:
            return "Error"
    }
}
  const convertDate = (dateOfOrder) => {
    const date = new Date(dateOfOrder)
    return `${date.getDate()} de ${convertMonth(date.getMonth()+1)} de ${date.getFullYear()}`
}

  const list = dataHistory?.orders?.map((item,index) => {
    const date = convertDate(item.createdAt)
    return <Historic key={index} nome={item.restaurantName} total={item.totalPrice} data={date}/>;
  });

  return (
    <div>
    <Container>
     
      {isLoading ? (
        <Loading />
      ) : (
        <ProfileDetails>
          <DatesDiv>
            <UserName>{data?.user?.name}</UserName>
            <Img src={Edit} onClick={() => goToEditProfilePage(navigate)} />
          </DatesDiv>
          <Email>{data?.user?.email}</Email>
          <br />
          <CPF>{data?.user?.cpf}</CPF>
          <AddressDiv>
            <div>
            <AddressTitle>Endereço Cadastrado</AddressTitle>
            <Img src={Edit} onClick={() => goToEditAdressPage(navigate)} />
            </div>
            <p>{data?.user?.address}</p>
          </AddressDiv>

          <div>
            <HistoryTitle>Histórico de Pedidos</HistoryTitle>
            <Path></Path>
            <HistoryDiv>
              <History>
                {dataHistory?.orders?.length > 0 ? list : "Você não realizou nenhum pedido"}
              </History>
            </HistoryDiv>
        
          </div>
          
        </ProfileDetails>
      )}
      <ButtonStyled>
        <StyledButton
          textPrimary={"primary"}
          color={"primary"}
          fullWidth
          variant="contained"
          type="submit"
          margin={"normal"}
          onClick={logout}
        >
          Logout
        </StyledButton>
      </ButtonStyled>
      
    </Container>
    </div>
  );
};

export default ProfilePage;