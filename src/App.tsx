import { useEffect, useState } from "react";
import { Button, TextField, Stack } from "@mui/material";

import "./App.css";
import Card from "./components/Card/Card";
import ButtonBox from "./components/ButtonBox/ButtonBox";
import CardBox from "./components/CardBox/CardBox";
import MainBox from "./components/MainBox/MainBox";
import PostsBox from "./components/PostsBox/PostsBox";
import PostsList from "./components/PostsList.tsx/PostsList";
import { PostItem } from "./interface/Props";

const uncollideContent = (postsArray: PostItem[]) => {
  return postsArray.reduce((acc: PostItem[], cur: PostItem) => {
    if (Array.isArray(cur.content)) {
      let content = [];

      for (let i = 0; i < cur.content.length; i++) {
        const newContent = {
          hasCollision: true,
          collisionData: {
            collisionSource: cur.id,
            contentIndex: i,
          },
          id: cur.id + "colInx" + i,
          content: cur.content[i],
        };

        content.push(newContent);
      }
      return [...acc, ...content];
    }
    return [...acc, cur];
  }, []);
};

function App() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  const url = "http://localhost:3004/hash";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const uncollidedData = uncollideContent(data);

        setPosts(uncollidedData);
      });
  }, [url]);

  console.log(posts);

  return (
    <div className="App">
      <Card>
        <CardBox>
          <MainBox>
            <TextField
              sx={{ paddingLeft: "7px" }}
              inputProps={{
                style: { fontSize: "1rem", padding: "8px 6px" },
              }}
            />
            <PostsBox>
              <PostsList posts={posts} />
            </PostsBox>
            <footer style={{ paddingLeft: "7px" }}>Footer</footer>
          </MainBox>
          <ButtonBox>
            <Button variant={"contained"}>GET</Button>
            <Button variant={"contained"}>POST</Button>
          </ButtonBox>
        </CardBox>
      </Card>
    </div>
  );
}

export default App;
