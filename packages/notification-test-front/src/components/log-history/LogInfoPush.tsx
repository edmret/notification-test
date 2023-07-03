import { Box } from "@mui/material";
import { LogDtoType, PushLogDto } from "notification-core/src/types/log.types";
import { FC } from "react";
import LogUserInfo from "./LogUserInfo";

const LogInfoPush:FC<LogDtoType> = (props) => {
    const log = props as PushLogDto;
    return (
        <Box display="flex" justifyContent="center" alignContent="center">
            <LogUserInfo userName={log.userName} userId={log.userId} message={log.message} />
        </Box>
    )
}

export default LogInfoPush;
