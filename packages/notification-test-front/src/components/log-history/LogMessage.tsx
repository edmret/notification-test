import { MessageDto } from "notification-core/src/types/Messages.type";
import { FC } from "react";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Chip, Divider, Typography } from "@mui/material";
import { LogMessageDto } from "notification-core/src/types/log.types";

const categoriesMap = new Map<string, [string, FC]>([
  ["Sports", ["brown", SportsFootballIcon]],
  ["Finance", ["#eab676", AttachMoneyIcon]],
  ["Movies", ["#9C27B0", LocalMoviesIcon]],
]);

const LogMessage: FC<MessageDto> = (props) => {
  const log = props as LogMessageDto;

  const [color, Icon] = categoriesMap.get(props.category) ?? [
    "black",
    SportsFootballIcon,
  ];

  return (
    <>
      <Chip
        icon={<Icon sx={{ color: `${color} !important` }} />}
        label={props.category}
        variant="outlined"
        sx={{ mx: 1 }}
      />
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Typography variant="caption" sx={{ mx: 1, minWidth: 200 }}>
        Message: {log.content}
      </Typography>
    </>
  );
};

export default LogMessage;
