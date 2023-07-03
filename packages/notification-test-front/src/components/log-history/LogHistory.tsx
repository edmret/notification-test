import { useLogs } from "@/hooks/apiHooks/logs.hooks";
import {
  Box,
  CircularProgress,
  Divider,
  List,
  Paper,
  Typography,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LogItem from "./LogItem";

const LogHistory = () => {
  const { data, isLoading } = useLogs();
  return (
    <Paper elevation={3} sx={{ px: 2, py: 3, mt: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" sx={{ mb: 1 }} color="primary">
          <QueryStatsIcon /> Log History
        </Typography>

        <Box>{isLoading && <CircularProgress size={20} />}</Box>
      </Box>
      <Divider />

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data?.map((log, index) => (
          <LogItem key={`log-index-${index}`} {...log} />
        ))}
      </List>
      {!data?.length && !isLoading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <PsychologyIcon sx={{ fontSize: 100 }} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            No logs Yet
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default LogHistory;
