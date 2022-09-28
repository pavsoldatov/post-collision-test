import { FC } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AppProps } from "../../interface/Props";

const randomColor = require("randomcolor");
const avatarColors = () => {
  return randomColor({
    luminosity: "dark",
    format: "rgba",
    alpha: 1,
  });
};

const Post: FC<AppProps> = ({ posts, onDelete, post }) => {
  const { content }: any = post;
  const { body, date, title }: { body: string; date: string; title: string } =
    content;

  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: `${avatarColors()}` }}>
            {title === undefined ? "" : title[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => {
              if (onDelete && post) onDelete(post);
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardContent>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "wrap",
            maxWidth: "800px",
          }}
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
