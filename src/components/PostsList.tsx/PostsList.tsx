import { FC } from "react";
import { Stack } from "@mui/material";
import { AppProps } from "../../interface/Props";
import Post from "../Post/Post";

import { PostItem, Content } from "../../interface/Props";


interface PostsListProps{
  posts: PostItem[];
}


const PostsList = ({ posts }: PostsListProps) => {
  
  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} p={1}>
      {posts.map(p => {
        let title
          if (Array.isArray(p.content)) {
            title = p.content[0].title
          } else {
            title = p.content.title
          }

          return <Post key={p.id} title={title} />
      })}
    </Stack>
  );
};

export default PostsList;
