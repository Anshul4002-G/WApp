import React, { useContext } from "react";
import { Box, Dialog, styled, List, ListItem, Typography } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

// Styled Components
const dialogStyle = {
  height: "95%",
  marginTop: 12,
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};

const Maincomponent = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
  background-color: #ffffff;
`;

const QrcodeBox = styled(Box)`
  position: relative;
  padding: 56px 56px 56px 0;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Qrcode = styled("img")({
  height: 254,
  width: 254,
  marginTop: 50,
  marginBottom: 20,
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginTitle = styled(Typography)`
  font-size: 16px;
  color: #008069;
  font-weight: 500;
  margin-bottom: 10px;
`;

export default function LoginDialog() {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };
  const onLoginError = () => {
    console.log(" error while logging in , in Logindialog");
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Maincomponent>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone.</ListItem>
            <ListItem>
              2. Tap Menu ⚙️ or Settings and select **Linked Devices**.
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code.
            </ListItem>
          </StyledList>
        </Container>
        <QrcodeBox>
          <Qrcode src={qrCodeImage} alt="scanner" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-62%, -50%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
          <LoginTitle>OR</LoginTitle>
          <Typography variant="body2" style={{ color: "#4a4a4a" }}>
            Log in with Google
          </Typography>
        </QrcodeBox>
      </Maincomponent>
    </Dialog>
  );
}
