import React, { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
// import { defaultProfilePicture } from "../../../constants/data";
import { AccountContext } from "../../../context/AccountProvider";

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
`;
const Component = styled(Box)`
  height: 46px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  width: 66vw;
  align-items: center;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 24px;
    color: black;
  }
`;

export default function ChatHeader({ person }) {
  const { activeUsers } = useContext(AccountContext);
  return (
    <Component>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Component>
  );
}
