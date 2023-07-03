import { Box, Typography } from "@mui/material";
import {
  LogDtoType,
  LogMessageDto,
} from "notification-core/src/types/log.types";
import { FC } from "react";
import LogMessage from "./LogMessage";

const LogSentInfo: FC<LogDtoType> = (props) => {
  const log = props as LogMessageDto;
  return (
    <LogMessage {...log} />
  );
};

export default LogSentInfo;
