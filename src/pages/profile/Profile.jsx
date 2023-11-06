import React, { useState } from 'react'
import StudentProfile from '../../components/StudentProfile';
import TeacherProfile from '../../components/TeacherProfile';

export default function Profile() {
  const [role, setRole] = useState("teacher");

  switch (role) {
    case "student":
      return <StudentProfile />
      case "teacher":
      return <TeacherProfile />
  }
}
