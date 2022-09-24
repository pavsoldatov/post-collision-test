import { Box } from "@mui/material";
import { FC } from "react";
import { AppProps } from "../../interface/Props";

const MainBox: FC<AppProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainBox;
