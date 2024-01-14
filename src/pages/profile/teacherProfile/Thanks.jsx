import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useStateValue } from "../../../context/StateProvider";
import { HiOutlineUpload } from "react-icons/hi";
import CustomInput from "../../../components/CustomInput";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { TfiAnnouncement } from "react-icons/tfi";

function Thanks({ thanks, id }) {
  const [{ user, endpoint }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const types = ["image/png", "image/jpeg"];

  const handleOpen = () => setOpen(!open);

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    const info = {
      name: data?.name,
      TeacherId: id,
      image: image,
    };

    formData.append("name", info.name);
    formData.append("teacherId", info.TeacherId);
    formData.append("image", info.image);

    console.log(info);

    axios
      .post(`${endpoint}appreciation_book`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
    window.location.reload();
  };

  console.log(thanks);

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div className="pt-4 max-h-[100vh] hide-scrollbar overflow-hidden overflow-y-scroll">
      {/* CARDS */}
      {user.role === "admin" && (
        <>
          {thanks.length > 0 && (
            <div className=" flex justify-end">
              <Button className="mx-8 mb-4 font-cairoBold" onClick={handleOpen}>
                إضافة كتاب شكر +
              </Button>
            </div>
          )}
        </>
      )}

      <div
        dir="rtl"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 px-8 pb-4"
      >
        {thanks.length > 0 &&
          thanks.map((item) => (
            <div key={item} dir="rtl" className="">
              <div className="bg-white border border-light-100/50 w-[15rem] rounded-lg overflow-hidden shadow-md">
                {!item.image ? (
                  <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-gradient flex justify-center items-center">
                    <TfiAnnouncement className="text-white p-6 w-full h-full" />
                  </div>
                ) : (
                  <div className="h-[8rem] mx-2 mt-4 rounded-lg bg-gradient">
                    <img
                      src={`${endpoint}images/` + item?.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                )}
                <CardBody>
                  <Typography
                    variant="h5"
                    className="text-lg font-cairoSemiBold text-black"
                  >
                    {item?.name}
                  </Typography>
                  <Typography className="font-cairoRegular">
                    {item.createdAt.slice(0, 10)}
                  </Typography>
                </CardBody>
              </div>
            </div>
          ))}
      </div>

      {thanks <= 0 && (
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="text-black text-[2.2rem] ">لا توجد كتب شكر</h1>
          {user.role === "admin" && (
            <div className="bg-black flex justify-center items-center rounded-md">
              <Button onClick={handleOpen} className="text-white">
                إضافة كتاب شكر
              </Button>
            </div>
          )}
        </div>
      )}
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-end">
          <h1 className="font-cairoBold">إضافة كتاب شكر</h1>
        </DialogHeader>
        <DialogBody>
          <div
            dir="rtl"
            className="text-gray-900  border-gray-200 px-8 rounded"
          >
            <label
              htmlFor="image"
              // className="cursor-pointer w-full hover:opacity-80"
              className={`cursor-pointer transition bg-white hover:opacity-75 border  ${
                !imagePreview
                  ? "border-dashed border-blue-500"
                  : "border-transparent"
              } rounded-md overflow-hidden w-full h-[10rem] flex flex-col justify-center items-center`}
            >
              <input
                id="image"
                name="image"
                type="file"
                className="hidden"
                accept={types}
                onChange={handleImageUpload}
              />
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    // className="img w-[50px] h-[50px] object-contain"
                    className="w-full h-full object-cover"
                  />
                  {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                </>
              ) : (
                <div className="flex flex-col justify-center items-center ">
                  <div className="bg-blue-500 rounded-full p-1.5 items-center">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                  <h2 className="font-cairoBold py-2 text-[#938D8D]">
                    صورة الكتاب
                  </h2>
                </div>
              )}
            </label>

            <CustomInput
              label={"الجهة المانحة"}
              control={control}
              name={"name"}
              placeholder={"اسم الجهة المانحة"}
              type={"text"}
              rules={{
                required: "الرجاء إدخال اسم الجهة المانحة",
              }}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="font-cairoBold">إلغاء</span>
          </Button>
          <Button
            variant="gradient"
            color="purple"
            className="font-cairoBold"
            onClick={handleSubmit(onSubmit)}
          >
            <span>إضافة</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default Thanks;
