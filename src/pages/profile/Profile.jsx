import React, { useEffect, useState } from "react";
import StudentProfile from "../../components/StudentProfile";
import TeacherProfile from "../../components/TeacherProfile";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";

export default function Profile() {
  const [{ user }, dispatch] = useStateValue();
  const { id } = useParams();

  switch (user.role) {
    case "student":
      return <StudentProfile id={id} />;
    case "teacher":
      return <TeacherProfile id={id} />;
    case "admin":
      return <h1>admin</h1>;
    default:
      return;
  }
}
