import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

export default function ChatBox() {
  const { person, account } = useContext(AccountContext);
  const [conversation, setconversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setconversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  );
}
