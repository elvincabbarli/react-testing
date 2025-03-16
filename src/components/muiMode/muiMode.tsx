import { Typography, useTheme } from "@mui/material";

const MuiMode = () => {
  const theme = useTheme();
  return <Typography variant="h1">{theme.palette.mode} Mode</Typography>;
};

export default MuiMode;
