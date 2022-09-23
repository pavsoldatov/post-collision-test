import { FC } from "react";
import { Paper } from "@mui/material";

import { Props } from "../../interface/Props";

const Card: FC<Props> = ({ children, ...props }) => {
  return (
    <Paper
      elevation={3}
      sx={{ minHeight: "400px", minWidth: "50%", padding: "10px" }}
    >
      {children}
    </Paper>
  );
};

export default Card;
