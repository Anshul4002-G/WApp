import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Container = styled(Box)`
  display: flex;
`;

const TimeStampnew = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
`;

export default function Conversation({ user }) {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getconversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getconversationDetails();
  }, [newMessageFlag, account.sub, user.sub]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.sub,
      receiverId: user.sub,
    });
  };

  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box styled={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <TimeStampnew>
              {formatDate(message?.timestamp)}{" "}
              {new Date(message?.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </TimeStampnew>
          )}
        </Container>

        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
            message
          </Text>
        </Box>
      </Box>
    </Component>
  );
}
