import React from "react";
import FormEditProfile from "../../components/FormEditProfile/FormEditProfile";
import { Container } from "../../components/FormEditProfile/styted";
import useRequestData from "../../hooks/useRequestData";

const EditProfilePage = () => {
  const { data } = useRequestData({}, "/profile");

  return (
    <div>
      
      <Container>
        {data.user && <FormEditProfile dataProfile={data} />}
      </Container>
    </div>
  );
};

export default EditProfilePage;