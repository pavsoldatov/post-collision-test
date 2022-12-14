import { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card/Card";
import CardBox from "./components/CardBox/CardBox";
import MainBox from "./components/MainBox/MainBox";
import PostsBox from "./components/PostsBox/PostsBox";
import PostsList from "./components/PostsList.tsx/PostsList";
import { PostItem } from "./interface/Props";
import resolveContent from "./util/resolveContent";
import Form from "./components/Form/Form";

function App() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  
  const url = "http://localhost:3004/hash";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        const resolvedData = resolveContent(data);
        setPosts(resolvedData);
      });
  }, [url]);

  return (
    <div className="App">
      <Card>
        <CardBox>
          <MainBox>
            <Form onSetPosts={setPosts} postsLength={posts.length}/>
            <PostsBox>
              <PostsList posts={posts} onSetPosts={setPosts} />
            </PostsBox>
            <footer style={{ paddingLeft: "7px" }}>Footer</footer>
          </MainBox>
        </CardBox>
      </Card>
    </div>
  );
}

export default App;
