import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";
import EditIcon from "@material-ui/icons/Edit";
import useRequestData from "../../hooks/useRequestData";
import { Typography } from "@material-ui/core";
import OrderCard from "../../components/OrderCard/OrderCard";

export default function ProfilePage() {
  const navigate = useNavigate();
  const userProfile = useRequestData("/profile");
  const userOrderHistory = useRequestData("/orders/history");

  useAuthorization();
  const { profile, setProfile, orderHistory, setOrderHistory } =
    useContext(GlobalStateContext);

  useEffect(() => {
    if (userProfile[0] && userOrderHistory[0]) {
      setProfile(userProfile[0].user);
      setOrderHistory(userOrderHistory[0].orders);
    } else {
    }
  }, [userProfile, userOrderHistory, setProfile, setOrderHistory]);

  return (
    <div className="MainContainerProfilePage">
      <div className="RenderContainer">
        <div className="LogoutContainer">
          <Typography variant="h4" color="initial">
            Editar Perfil
          </Typography>
          <Typography
            variant="body1"
            onClick={() => {
              localStorage.clear();
              navigate("/home");
            }}
          ></Typography>

          <Typography variant="body1" color="secondary">
            Logout
          </Typography>
        </div>

        <Typography variant="body1">{profile.name}</Typography>
        <EditIcon onClick={() => navigate("/update_profile")} />
        <Typography variant="body1">{profile.email}</Typography>
        <Typography variant="body1">{profile.cpf}</Typography>

        <Typography variant="body1">Endereço Cadastrado</Typography>

        <EditIcon onClick={() => navigate("/address_form")} />
        <Typography variant="body1">{profile.address}</Typography>

        <Typography variant="body1" color="initial">
          Historico de Pedidos
        </Typography>
        {orderHistory ? (
          orderHistory.map((order) => {
            return (
              <OrderCard
                key={order.createdAt}
                totalPrice={order.totalPrice}
                restaurantName={order.restaurantName}
                date={order.expiresAt}
              />
            );
          })
        ) : (
          <Typography variant="body1">
            Você não realizou nenhum pedido
          </Typography>
        )}
      </div>
    </div>
  );
}
