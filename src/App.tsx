import { Button, TextField, Box, Stack } from "@mui/material";
import Card from "./components/Card/Card";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "6px",
            minHeight: "inherit",
            maxHeight: "100%",
          }}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <TextField
              inputProps={{
                style: { fontSize: "1rem", padding: "8px 6px" },
              }}
            />
            <Box sx={{ flex: "1", minHeight: "400px", maxHeight: "400px", overflowY: "scroll" }}>
              <Stack spacing={2} sx={{paddingX: "4px"}}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </Stack>
            </Box>
            <footer>Footer</footer>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <Button variant={"contained"}>GET</Button>
            <Button variant={"contained"}>POST</Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default App;
