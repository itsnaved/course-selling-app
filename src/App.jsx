import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from './Signup'
import { Appbar } from './Appbar'
import { Signin } from './Signin'
import { AddCourse } from "./AddCourse";
import { Courses } from "./Courses";
import { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}>
      
      <Router>
        <Appbar />
        <Routes>
          <Route path={"/addcourses"} element={<AddCourse />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
