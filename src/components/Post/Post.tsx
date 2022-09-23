import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Post = () => {
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton onClick={() => console.log("delete")}>
            <DeleteOutlinedIcon />
          </IconButton>
        }
        title="hello"
        subheader="subheader"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          "Details"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
