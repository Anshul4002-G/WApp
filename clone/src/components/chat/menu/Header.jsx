import { Box, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as Message } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Image = styled("img")({
  height: 41,
  width: 41,
  borderRadius: "50%",
});

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 8px;
    color: black;
  }
  & :first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

export default function Header() {
  const { account } = useContext(AccountContext);
  const [opendrawer, setopenDrawer] = useState(false);

  const toggleDrawer = () => {
    setopenDrawer(true);
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="Dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <Message />
          <HeaderMenu setopenDrawer={setopenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={opendrawer} setOpen={setopenDrawer} />
    </>
  );
}
