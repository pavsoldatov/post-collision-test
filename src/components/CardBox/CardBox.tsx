import { Box } from "@mui/material";
import { FC } from "react";
import { AppProps } from "../../interface/Props";

const CardBox: FC<AppProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "6px",
        minHeight: "inherit",
        maxHeight: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default CardBox;
