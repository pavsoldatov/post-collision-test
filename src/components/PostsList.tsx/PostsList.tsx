import { FC } from "react";
import { Stack } from "@mui/material";
import { AppProps, Content } from "../../interface/Props";
import Post from "../Post/Post";

import { PostItem } from "../../interface/Props";

interface PostsListProps {
  posts: PostItem[];
  rawPosts: PostItem[];
  onSetPosts?: (arg0: PostItem[]) => void;
  onDelete?: (post: PostItem) => void;
}

const PostsList = ({ posts, rawPosts, onSetPosts }: PostsListProps) => {
  const handleDeletePost = (post: PostItem) => {
    const newPosts = posts.filter((p) => p.id !== post.id);
    if (onSetPosts) onSetPosts(newPosts);

    console.log(rawPosts);
    console.log(newPosts);
    console.log(post);

    let newContent: any = [];
    let newPayload: any = {};
    for (const newP of newPosts) {
      if (newP.hasCollision) {
        newContent = [...newContent, newP.content];
      }
    }

    if (newContent.length === 1 && post.collisionData) {
      const [contentObject] = newContent;
      newPayload = {
        id: post.collisionData.collisionSource,
        content: contentObject,
      };

      const url = "http://localhost:3004/hash/" + newPayload.id;
      const putOptions = {
        method: "PUT",
        body: JSON.stringify(newPayload),
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(newContent);
      fetch(url, putOptions).then((resp) => console.log(resp.status));
      return;
    }

    if (newContent.length > 1 && post.collisionData) {
      newPayload = {
        id: post.collisionData.collisionSource,
        content: newContent,
      };

      const url = "http://localhost:3004/hash/" + newPayload.id;
      const putOptions = {
        method: "PUT",
        body: JSON.stringify(newPayload),
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(newContent);
      fetch(url, putOptions).then((resp) => console.log(resp.status));
      return;
    }

    console.log(post.collisionData?.collisionSource);
    const id = post.collisionData?.collisionSource ?? post.id;

    const url = "http://localhost:3004/hash/" + id;
    const putOptions = {
      method: "DELETE",
    };
    console.log(newContent);
    fetch(url, putOptions).then((resp) => console.log(resp.status));
  };

  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} p={1}>
      {posts.map((p: any) => {
        return <Post post={p} key={p.id} onDelete={handleDeletePost} />;
      })}
    </Stack>
  );
};

export default PostsList;
