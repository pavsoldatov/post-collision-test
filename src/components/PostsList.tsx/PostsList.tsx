import { Stack } from "@mui/material";
import Post from "../Post/Post";
import { PostItem } from "../../interface/Props";
import fetchPayload from "../../util/fetchPayload";

interface PostsListProps {
  posts: PostItem[];
  // rawPosts: PostItem[];
  onSetPosts?: (arg0: PostItem[]) => void;
  onDelete?: (post: PostItem) => void;
}

const PostsList = ({ posts, onSetPosts }: PostsListProps) => {
  const handleDeletePost = (post: PostItem): void => {
    const newPosts = posts.filter((p) => p.id !== post.id);
    if (onSetPosts) onSetPosts(newPosts);

    let newContent: any = [];
    let deletionPayload: any = {};
    for (const newP of newPosts) {
      if (newP.hasCollision) {
        newContent = [...newContent, newP.content];
      }
    }

    if (newContent.length === 1 && post.collisionData) {
      const [contentObject] = newContent;
      deletionPayload = {
        id: post.collisionData.collisionSource,
        content: contentObject,
      };
      const url = "http://localhost:3004/hash/" + deletionPayload.id;
      fetchPayload(url, "PUT", deletionPayload);
      return;
    }

    if (newContent.length > 1 && post.collisionData) {
      deletionPayload = {
        id: post.collisionData.collisionSource,
        content: newContent,
      };
      const url = "http://localhost:3004/hash/" + deletionPayload.id;
      fetchPayload(url, "PUT", deletionPayload);
      return;
    }

    const id = post.collisionData?.collisionSource ?? post.id;
    const url = "http://localhost:3004/hash/" + id;
    fetchPayload(url, "DELETE", deletionPayload);
    return;
  };

  return posts.length > 0 ? (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} p={1}>
      {posts.map((p: any) => {
        return <Post post={p} key={p.id} onDelete={handleDeletePost} />;
      })}
    </Stack>
  ) : (
    <p style={{ textAlign: "center", marginTop: "5%", marginLeft: "2.5%" }}>
      No posts to display
    </p>
  );
};

export default PostsList;
