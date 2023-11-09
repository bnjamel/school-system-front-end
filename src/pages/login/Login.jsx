import React from "react";
import login from "../login/login.svg";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

function Login() {
  let navigator = useNavigate();

  const onSubmit = () => {
    navigator("/");
  }

  return (
    <div className="flex h-[65vh] flex-col lg:flex-row justify-center my-[4rem] md:my-[2rem] lg:mt-[8rem] lg:mb-0 items-center container mx-auto">
      {/* PICTURE */}
      <div className="w-full h-full flex-[.5] flex items-center">
        <img width={700} height={700} src={login} alt="login" />
      </div>
      {/* LOGIN FORM */}
      <div className="flex-[.5] items-center justify-center flex">
      <div className="bg-[#5B91D0] p-4 lg:p-6 lg:px-14 rounded-lg border-2 border-gray-500">
        <Card color="transparent" shadow={false}>
          <h1 dir="rtl" className="font-cairoBold text-2xl text-white">
            مرحبًا بك في المدرسة
          </h1>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                dir="rtl"
                variant="h6"
                color="white"
                className="-mb-3 font-cairoRegular"
              >
                البريد الإلكتروني
              </Typography>
              <Input
                dir="rtl"
                size="lg"
                placeholder="name@mail.com"
                className="text-black bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography
                dir="rtl"
                variant="h6"
                color="white"
                className="-mb-3 font-cairoRegular"
              >
                كلمة المرور
              </Typography>
              <Input
                type="password"
                size="lg"
                dir="rtl"
                placeholder="********"
                className="text-black bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div dir="rtl">
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="white"
                    className="flex items-center font-cairoRegular"
                    dir="rtl"
                  >
                    أوافق على كافة
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900 "
                      dir="rtl"
                    >
                      &nbsp;الشروط والأحكام
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            </div>
            <Button onClick={onSubmit} className="mt-6 font-cairoBold text-md" fullWidth>
              تسجيل الدخول
            </Button>
            <Typography
              dir="rtl"
              color="white"
              className="mt-4 text-center font-cairoRegular"
            >
              هل نسيت كلمة المرور؟
              <a href="#" className="font-medium text-gray-900">
                اعادة تعيين
              </a>
            </Typography>
          </form>
        </Card>
      </div>

      </div>
    </div>
  );
}

export default Login;
