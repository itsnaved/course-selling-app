import { TextField, Button, Card } from "@mui/material"
import { useState } from "react"

export const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <Button
          size='large'
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
              },
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: "",
                published: true
              }),
            }).then((res) => {
              return res.json();
            }).then((data) => { "token", data.token });
          }} >
          Add Course
        </Button>
      </Card>
    </div>
  )
}
