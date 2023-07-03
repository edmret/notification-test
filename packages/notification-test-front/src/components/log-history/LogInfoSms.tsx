import { Box, Divider, Typography } from "@mui/material";
import { LogDtoType, SmsLogDto } from "notification-core/src/types/log.types";
import { FC } from "react";
import LogUserInfo from "./LogUserInfo";

const LogInfoSms:FC<LogDtoType> = (props) => {
    const log = props as SmsLogDto;

    return (
        <Box display="flex" justifyContent="center" alignContent="center">
            <LogUserInfo userName={log.userName} userId={log.userId} message={log.message} />
            <Divider flexItem orientation="vertical" sx={{mx:1}} />
            <Typography variant="caption">
                Phone: {log.phoneNumber}
            </Typography>
        </Box>
    )
}

export default LogInfoSms;
