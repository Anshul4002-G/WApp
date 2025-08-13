import { Box, styled, Typography } from "@mui/material";
import React, { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rbga(0, 0, 0, 0.08);
  & :first-child {
    font-size: 14px;
    color: #009688;
    font-weight: 200;
  }
  & :last-child {
    margin: 14px 0;
    color: #4a4a4a;
  }
`;

const InfoContainer = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p {
    font-size: 13px;
    color: #8696a0;
  }
`;

export default function Profile() {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>
      <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </BoxWrapper>

      <InfoContainer>
        <Typography>
          This is not your username , this will be visible to your whatsapp
          contact's.
        </Typography>
      </InfoContainer>
      <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat! Sleep! Work! Repeat!</Typography>
      </BoxWrapper>
    </>
  );
}
