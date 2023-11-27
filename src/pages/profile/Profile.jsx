import React, { useState } from "react";
import StudentProfile from "../../components/StudentProfile";
import TeacherProfile from "../../components/TeacherProfile";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [role, setRole] = useState("student");
  const { id } = useParams();
  console.log(id);
  switch (role) {
    case "student":
      return <StudentProfile />;
    case "teacher":
      return <TeacherProfile />;
  }
}
