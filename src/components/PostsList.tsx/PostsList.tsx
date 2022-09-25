import { FC } from "react";
import { Stack } from "@mui/material";
import { AppProps } from "../../interface/Props";
import Post from "../Post/Post";

import { PostItem, Content } from "../../interface/Props";

interface PostsListProps {
  posts: PostItem[] | any;
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} p={1}>
      {posts.map((p: any) => {
        return (
          <Post
            key={p.id}
            title={p.content.title}
            details={p.content.body}
            subheader={p.content.date}
          />
        );
      })}
    </Stack>
  );
};

export default PostsList;
