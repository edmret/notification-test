import { Chip, Tooltip } from "@mui/material";
import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { MessageDto } from "notification-core";
import LogMessage from "./LogMessage";

interface LogUserInfoProps {
  userName: string;
  userId: string;
  message: MessageDto;
}

const LogUserInfo: FC<LogUserInfoProps> = ({ userName, userId, message }) => {
  return (
    <>
      <Tooltip title={userId} placement="top">
        <Chip icon={<PersonIcon />} label={userName} variant="outlined" />
      </Tooltip>
      <LogMessage {...message} />
    </>
  );
};

export default LogUserInfo;
