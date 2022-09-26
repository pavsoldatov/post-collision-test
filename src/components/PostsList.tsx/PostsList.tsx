import { FC } from "react";
import { Stack } from "@mui/material";
import { AppProps, Content } from "../../interface/Props";
import Post from "../Post/Post";

import { PostItem } from "../../interface/Props";

interface PostsListProps {
  posts: PostItem[];
  onSetPosts?: (...args: any[]) => void;
  onDelete?: (id: string) => void;
}

const PostsList = ({ posts, onSetPosts }: PostsListProps) => {
  const handleDeletePost = (id: string) => {
    if (id === undefined) {
      console.error(`Post ID is undefined`);
      return;
    }

    const newPosts = posts?.filter((post) => post.id !== id);
    if (onSetPosts) onSetPosts(newPosts);
  };

  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} p={1}>
      {posts.map((p: any) => {
        return (
          <Post
            key={p.id}
            id={p.id}
            title={p.content.title}
            details={p.content.body}
            subheader={p.content.date}
            onDelete={handleDeletePost}
          />
        );
      })}
    </Stack>
  );
};

export default PostsList;
