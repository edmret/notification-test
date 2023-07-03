import { Box, Chip, Divider, ListItem, Typography } from "@mui/material";
import { LogDto, LogDtoType, LogType } from "notification-core/src/types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { FC } from "react";

import EmailIcon from "@mui/icons-material/Email";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SmsIcon from "@mui/icons-material/Sms";
import BusAlertIcon from "@mui/icons-material/BusAlert";

import LogInfoEmail from "./LogInfoEmail";
import LogInfoSms from "./LogInfoSms";
import LogInfoPush from "./LogInfoPush";
import LogSentInfo from "./LogSentInfo";

import Tooltip from "@mui/material/Tooltip";

type IconTriplet = [string, FC, FC<LogDtoType>];

const pairs = new Map<LogType, IconTriplet>([
  ["MessageSent", ["info", DeliveryDiningIcon, LogSentInfo]],
  ["MessageEmailReceived", ["secondary", EmailIcon, LogInfoEmail]],
  ["MessageSmsReceived", ["success", SmsIcon, LogInfoSms]],
  ["MessagePushReceived", ["warning", BusAlertIcon, LogInfoPush]],
]);

const LogItem = (props: LogDto) => {
  const [color, Icon, Component] = pairs.get(props.eventType) ?? [
    "primary",
    DeliveryDiningIcon,
    DeliveryDiningIcon,
  ];
  return (
    <ListItem>
      <Box display="flex" flexDirection="column">
        <Box sx={{py: 1}}>
          <Tooltip
            title={new Date(props.createdAt ?? Date.now()).toLocaleString()}
            placement="top"
          >
            <Typography variant="caption">
              {formatDistanceToNow(new Date(props.createdAt ?? Date.now()))}
            </Typography>
          </Tooltip>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Chip label={props.eventType} color={color as any} icon={<Icon />} />
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Component {...props.data} />
        </Box>
      </Box>
    </ListItem>
  );
};

export default LogItem;
