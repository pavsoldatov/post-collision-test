import { Box } from "@mui/material";
import { FC } from "react";
import { AppProps } from "../../interface/Props";

const ButtonBox: FC<AppProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "7px",
        padding: "1px",
      }}
    >
      {children}
    </Box>
  );
};

export default ButtonBox;
