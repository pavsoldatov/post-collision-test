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

function App() {
  const [posts, setPosts] = useState<PostItem[]>([]);

  const url = "http://localhost:3004/hash";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
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
