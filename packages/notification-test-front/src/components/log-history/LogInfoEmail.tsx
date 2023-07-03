import { Box, Divider, Typography } from "@mui/material";
import { EmailLogDto, LogDtoType } from "notification-core/src/types/log.types";
import { FC } from "react";
import LogUserInfo from "./LogUserInfo";

const LogInfoEmail:FC<LogDtoType> = (props) => {
    const log = props as EmailLogDto;
    return (
        <Box display="flex" justifyContent="center" alignContent="center">
            <LogUserInfo userName={log.userName} userId={log.userId} message={log.message} />
            <Divider flexItem orientation="vertical" sx={{mx:1}} />
            <Typography variant="caption">
                Email: {log.email}
            </Typography>
        </Box>
    )
}

export default LogInfoEmail;
