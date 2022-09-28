import { TextField, Button } from "@mui/material";
import { FC, useState } from "react";
import { PostItem } from "../../interface/Props";
import fetchPayload from "../../util/fetchPayload";

interface FormProps {
  onSetPosts?: (arg0: any) => void;
  postsLength: number;
}

const Form: FC<FormProps> = ({ onSetPosts, postsLength }): JSX.Element => {
  const initialName = "";
  const [enteredName, setEnteredName] = useState(initialName);
  const initialDetails = "";
  const [enteredDetails, setEnteredDetails] = useState(initialDetails);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredName(e.target.value);
  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredDetails(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredDetails.trim().length === 0)
      return;

    const idNum = function randomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const postPayload = {
      id: "hash" + idNum(postsLength, 10000),
      content: {
        title: enteredName.trim().toString(),
        body: enteredDetails.trim().toString(),
        date: new Date().toLocaleDateString(),
      },
    };

    if (onSetPosts)
      onSetPosts((prevState: PostItem[]) =>
        prevState ? [...prevState, postPayload] : [postPayload]
      );

    const url = "http://localhost:3004/hash/";
    fetchPayload(url, "POST", postPayload);

    setEnteredName(initialName);
    setEnteredDetails(initialDetails);
  };

  return (
    <form
      action=""
      method="get"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      <TextField
        id="Name"
        label="Name"
        name="Name"
        type="text"
        variant="outlined"
        size="small"
        sx={{ marginLeft: "7px" }}
        onChange={handleNameChange}
        value={enteredName}
      />
      <TextField
        id="Details"
        label="Details"
        name="Details"
        type="text"
        variant="outlined"
        size="small"
        sx={{ marginLeft: "7px" }}
        onChange={handleDetailsChange}
        value={enteredDetails}
      />
      <Button
        sx={{ width: "calc(100% - 7px)", marginLeft: "7px", paddingY: "10px" }}
        variant={"contained"}
        type="submit"
      >
        POST
      </Button>
    </form>
  );
};

export default Form;
