import React from "react"
import FormEditAddress from "../../components/FormEditAddressPage/FormEditAddress"
import useRequestData from "../../hooks/useRequestData"
import { Container } from "../../components/FormEditAddressPage/styled"

const EditAdressPage = () => {
  const { data } = useRequestData({}, "/profile/address")

  return (
    <div>
      
      <Container>
        {data.address && <FormEditAddress dataAddress={data} />}
      </Container>
    </div>
  )
}

export default EditAdressPage