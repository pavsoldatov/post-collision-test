import { TextField, Button } from "@mui/material";
import { FC, useState } from "react";
import { AppProps } from "../../interface/Props";

const Form: FC<AppProps> = (props: {}): JSX.Element => {
  const initialName = "";
  const [enteredName, setEnteredName] = useState(initialName);
  const initialDetails = "";
  const [enteredDetails, setEnteredDetails] = useState(initialDetails);
  const [idNum, setIdNum] = useState(5);
  //   const initialDate = "";
  //   const [submissionDate, setSubmissionDate] = useState(initialDate);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredName(e.target.value);
  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEnteredDetails(e.target.value);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (enteredName.trim().length === 0 || enteredDetails.trim().length === 0)
      return;

    setIdNum((prevNum) => prevNum + 1);

    const payload = {
      id: "hash" + idNum,
      content: {
        title: enteredName.trim().toString(),
        body: enteredDetails.trim().toString(),
        date: new Date().toLocaleDateString(),
      },
    };

    console.log(payload);

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
        // inputProps={{
        //   style: { fontSize: "1rem", padding: "8px 6px" },
        // }}
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
