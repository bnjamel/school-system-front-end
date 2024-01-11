import React, { useState } from "react";
// import login from "../login/login.svg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login_1.png";
import { useForm, Controller } from "react-hook-form";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";
import CustomInput from "../../components/CustomInput";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function Login() {
  const [{}, dispatch] = useStateValue();
  const [error, setError] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  let navigator = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    let user = { email: data.email, password: data.password };

    const reversedEmail = user.email.split("").reverse().join("");
    const atIndex = reversedEmail.indexOf("@");
    const dotIndex = reversedEmail.indexOf(".", atIndex);
    const userType = reversedEmail
      .substring(atIndex + 1, dotIndex)
      .split("")
      .reverse()
      .join("");

    console.log(userType);

    switch (userType) {
      // Student Log
      case "student":
        axios
          .post("http://localhost:3001/student/login", user)
          .then((response) => {
            if (response.data.error) {
              setError(response.data.error);
            } else {
              localStorage.setItem("accessToken", response.data.token);
              dispatch({
                type: "SET_PROFILE",
                profile: response.data,
              });
              dispatch({
                type: "SET_USER",
                user: {
                  email: response.data.email,
                  fullName: response.data.fullName,
                  role: response.data.role,
                  id: response.data.id,
                },
              });
              dispatch({
                type: "SET_LOGIN",
                isLogged: true,
              });
              navigator("/", { replace: true });
            }
          });
        break;

      // Teacher Log
      case "teacher":
        axios
          .post("http://localhost:3001/teacher/login", user)
          .then((response) => {
            if (response.data.error) {
              setError(response.data.error);
            } else {
              localStorage.setItem("accessToken", response.data.token);
              dispatch({
                type: "SET_PROFILE",
                profile: response.data,
              });
              dispatch({
                type: "SET_USER",
                user: {
                  email: response.data.email,
                  fullName: response.data.fullName,
                  role: response.data.role,
                  id: response.data.id,
                },
              });
              dispatch({
                type: "SET_LOGIN",
                isLogged: true,
              });
              navigator("/", { replace: true });
            }
          });
        break;

      // Admin Log
      case "admin":
        axios
          .post("http://localhost:3001/admin/login", user)
          .then((response) => {
            if (response.data.error) {
              setError(response.data.error);
              setIsLogged(false);
            } else {
              localStorage.setItem("accessToken", response.data.token);
              dispatch({
                type: "SET_PROFILE",
                profile: response.data,
              });
              dispatch({
                type: "SET_USER",
                user: {
                  email: response.data.email,
                  fullName: response.data.fullName,
                  role: response.data.role,
                  id: response.data.id,
                },
              });
              dispatch({
                type: "SET_LOGIN",
                isLogged: true,
              });
              navigator("/");
            }
          });
        break;
      default:
        break;
    }

    // navigator("/");
  };

  return (
    <div className="flex h-[65vh] flex-col lg:flex-row justify-center my-[4rem] md:my-[2rem] lg:mt-[8rem] lg:mb-0 items-center container mx-auto">
      {/* PICTURE */}
      <div className="w-full h-full flex-[.5] items-center hidden lg:flex">
        <img width={700} height={700} src={login} alt="login" />
      </div>
      {/* LOGIN FORM */}
      <div className="flex-[.5] items-center justify-center flex">
        <div
          className="px-4 py-6 lg:py-[4rem] lg:px-14 bg-gradient rounded-tr-md rounded-tl-[10rem]
      rounded-bl-md rounded-br-[10rem] m-2
      login-card-shadow border border-black
      "
        >
          <Card color="transparent" shadow={false}>
            <h1 dir="rtl" className="font-cairoBold text-2xl text-white">
              مرحبًا بك في مدرسة أكد
            </h1>

            <form
              dir="rtl"
              className="p-4 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-1 flex flex-col ">
                <CustomInput
                  control={control}
                  name={"email"}
                  label={"البريد الالكتروني"}
                  rules={{
                    required: "ادخل بريد الكتروني صحيح",
                    pattern: EMAIL_REGEX,
                  }}
                  type="email"
                  placeholder={"example.teacher@school.com"}
                />

                <CustomInput
                  control={control}
                  name={"password"}
                  type={"password"}
                  label={"كلمة المرور"}
                  rules={{
                    required: "ادخل كلمة المرور",
                  }}
                  placeholder={"كلمة المرور"}
                />
              </div>
              {error && <>كلمة المرور او البريد الالكتروني غير صالح</>}
              <div dir="rtl">
                <Typography
                  variant="small"
                  color="white"
                  className="flex items-center font-cairoRegular"
                  dir="rtl"
                >
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900 hover:underline py-1"
                    dir="rtl"
                  >
                    نسيت كلمة المرور
                  </a>
                </Typography>
              </div>
              <Button
                onClick={handleSubmit(onSubmit)}
                className="mt-6 font-cairoBold text-md"
              >
                تسجيل الدخول
              </Button>
              <Typography
                dir="rtl"
                color="white"
                className="mt-4 text-center font-cairoRegular"
              >
                لتسجيل طالب جديد{" "}
                <Link
                  to="/signup"
                  className="font-medium text-gray-900 underline"
                >
                  اضغط هنا
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
