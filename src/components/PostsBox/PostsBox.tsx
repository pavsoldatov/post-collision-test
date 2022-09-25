import { Box } from "@mui/material";
import { FC } from "react";
import { AppProps } from "../../interface/Props";

const PostsBox: FC<AppProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: "1",
        maxHeight: "400px",
        maxWidth: "600px",
        overflowY: "scroll",
      }}
    >
      {children}
    </Box>
  );
};

export default PostsBox;
