import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AppProps } from "../../interface/Props";

const generateRandomHex = () =>
  `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;

const Post: FC<AppProps> = ({ title, details, subheader, ...props }) => {
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: `${generateRandomHex()}` }}>W</Avatar>
        }
        action={
          <IconButton onClick={() => console.log("delete")}>
            <DeleteOutlinedIcon sx={{ alignSelf: "auto" }} />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "wrap",
            maxWidth: "600px",
          }}
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
