import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const Course = () => {
    let {courseId}= useParams();

    const setCourses = useSetRecoilState(coursesState);

    
      useEffect(()=>{
          fetch("http://localhost:3000/admin/courses",{ 
            method: "GET",
            headers:{
              "Authorization": "Bearer " + localStorage.getItem("token")
            }
          }).then((res)=>{return res.json()}).then((data)=>{setCourses(data.courses) });
        },[]); 
  return (
    <div>
       <CourseCard courseId={courseId}/>
       <UpdateCard courseId={courseId}/>
    </div>
  )
}
function UpdateCard(props){
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [image, setImage]= useState("")
     const course= props.course;
     const [courses, setCourses]= useRecoilState(coursesState);

    return <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant="outlined" style={{ width: 400, padding: 20 }}>

        <Typography>Uodate Course Details </Typography>

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

        <TextField
          label="Image link"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />

        <Button
          size='large'
          variant="contained"
          onClick={() => {
            fetch("http://localhost:3000/admin/courses/ "+ props.courseId, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
              },
              body: JSON.stringify({
                title: title,
                description: description,
                imageLink: image,
                published: true
              }),
            }).then((res) => {
              return res.json();
            }).then((data) => { 
              // "token", data.token ;  
              
              let updatedCourses= [];
              for(let i=0; i< props.courses.length; i++){
                if(courses[i].id == props.courseId){
                  updatedCourses.push({
                  id: props.courseId,
                  title: title,
                  description: description,
                  imageLink: image
                })
                }else{
                  updatedCourses.push(courses[i]);
                }
              }
              setCourses(updatedCourses);
            });
          }} >
          Update Course
        </Button>
      </Card>
    </div>
}

function CourseCard(props){
    const courses= useRecoilValue(coursesState)
    let course= null;
    for(let i=0; i< courses.length; i++){
      if(courses[i].id == props.courseId){
        course = courses[i];
      }
    }
  
    if(!course){
      return "Loading...."
    }

    return <div style={{display:"flex", justifyContent:"center"}}> 
    <Card style={{
    margin:10,
    width: 300,
    minHeight: 200
  }}>
    <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
    <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
    <img src={course.imageLink} style={{width:300}}></img>
  </Card> 
  </div>
}
const coursesState = atom({
  key: 'coursesState', 
  default: '', 
});