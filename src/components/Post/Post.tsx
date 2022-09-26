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

const Post: FC<AppProps> = ({
  title,
  details,
  subheader,
  posts,
  onDelete,
  id,
  ...props
}) => {
  const handleDeletePost = (id?: string) => {
    if (id === undefined) return;
    const newPosts = posts?.filter((post) => post.id !== id);
  };

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
              if (onDelete && id) onDelete(id);
            }}
          >
            <DeleteOutlinedIcon />
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
            maxWidth: "800px",
          }}
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
