import React from "react";
import { Drawer, Box, Typography, styled } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 500;
  }
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Text = styled(Typography)`
  font-size: 18px;
`;

const drawerstyle = {
  left: 20,
  top: 20,
  height: "95%",
  width: "28%",
  boxShadow: "none",
};
export default function InfoDrawer({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: drawerstyle }}
        style={{ zIndex: 1500 }}
      >
        <Header>
          <ArrowBack onClick={() => setOpen(false)} />
          <Text>Profile</Text>
        </Header>
        <Component>
          <Profile />
        </Component>
      </Drawer>
    </>
  );
}
