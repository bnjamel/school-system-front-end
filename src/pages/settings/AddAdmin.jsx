import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import { FiEdit } from "react-icons/fi";
import imagePlaceholder from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

function AddAdmin() {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

  const types = ["image/png", "image/jpeg"];

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const removeImage = () => {
    setImagePreview(null);
    setImage(null);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data?.name);
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("phone_number", data?.phone_number);
    formData.append("degree", data?.degree);
    formData.append("experience", data?.experience);
    formData.append("location", data?.location);
    formData.append("birthdate", data?.birthdate);
    formData.append("image", image);

    axios
      .post("http://localhost:3001/admin/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    navigate("/settings");
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col py-10">
      {/* FORM */}
      <section class="max-w-4xl  p-6  dark:bg-gray-800 mb-6 font-cairoRegular">
        {/* Profile Picture */}
        <div
          dir="rtl"
          className="flex flex-col justify-center mt-4 items-center"
        >
          <label
            htmlFor="image"
            className={`cursor-pointer rounded-full self-center flex w-[8rem] h-[8rem] transition ease-in-out border border-transparent hover:opacity-90`}
          >
            {imagePreview ? (
              <>
                <div className="relative">
                  <div className="avatar h-[150px] w-[150px] overflow-hidden">
                    <div className="w-full h-full bg-black rounded-full overflow-hidden">
                      <img
                        src={imagePreview}
                        className="img w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="items-center flex  absolute bottom-[-10px]">
                    <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                      <FiEdit className="text-white" />
                    </div>
                  </div>
                  {/* <div className="items-center flex px-6 py-4">
                    <div className="bg-[#091420] rounded-full p-2 items-center mt-20  mr-4">
                      <BiImageAdd className="text-2xl text-white " />
                    </div>
                  </div> */}
                </div>
              </>
            ) : (
              <>
                <div className="relative">
                  <div className="avatar h-[150px] w-[150px] overflow-hidden">
                    <div className="w-full h-full bg-black rounded-full overflow-hidden">
                      <img
                        src={imagePlaceholder}
                        className="img w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="items-center flex  absolute bottom-[-10px]">
                    <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                      <FiEdit className="text-white" />
                    </div>
                  </div>
                  {/* <div className="items-center flex px-6 py-4">
                    <div className="bg-[#091420] rounded-full p-2 items-center mt-20  mr-4">
                      <BiImageAdd className="text-2xl text-white " />
                    </div>
                  </div> */}
                </div>
              </>
            )}
            <input
              id="image"
              name="image"
              type="file"
              className="hidden"
              accept={types}
              onChange={handleImageUpload}
            />
            {/* {imagePreview && (
              <>
                <img
                  src={imagePreview}
                  className="img w-full h-full object-contain"
                />
              </>
            )} */}
          </label>
        </div>

        {/* Details */}
        <div className="my-8 flex flex-col md:flex-row justify-between items-center md:items-start mx-auto max-w-[500px] ">
          <div className="w-full">
            <>
              <div className="my-2">
                <CustomInput
                  label={"الاسم"}
                  name={"name"}
                  type={"text"}
                  placeholder={"الاسم الثلاثي"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال الاسم الثلاثي",
                  }}
                />
              </div>

              <div className="my-2">
                <CustomInput
                  label={"البريد الالكتروني"}
                  name={"email"}
                  type={"email"}
                  placeholder={"البريد الالكتروني"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال البريد الالكتروني",
                  }}
                />
              </div>

              <div className="my-2">
                <CustomInput
                  label={"كلمة المرور"}
                  name={"password"}
                  type={"password"}
                  placeholder={"كلمة المرور"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال كلمة المرور",
                  }}
                />
              </div>

              <div className="my-2">
                <CustomInput
                  label={"رقم الهاتف"}
                  name={"phone_number"}
                  type={"text"}
                  placeholder={"رقم الهاتف"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال رقم الهاتف",
                  }}
                />
              </div>

              <div className="my-2">
                <CustomInput
                  label={"الشهادة"}
                  name={"degree"}
                  type={"text"}
                  placeholder={"الشهادة"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال الشهادة",
                  }}
                />
              </div>
              <div className="my-2">
                <CustomInput
                  label={"سنوات الخبرة"}
                  name={"experience"}
                  type={"number"}
                  placeholder={"سنوات الخبرة"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال سنوات الخبرة",
                  }}
                />
              </div>
              <div className="my-2">
                <CustomInput
                  label={"تاريخ الميلاد"}
                  name={"birthdate"}
                  type={"date"}
                  placeholder={"تاريخ الميلاد"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال تاريخ الميلاد",
                  }}
                />
              </div>

              <div className="my-2">
                <CustomInput
                  label={"العنوان"}
                  name={"location"}
                  type={"text"}
                  placeholder={"العنوان"}
                  control={control}
                  rules={{
                    required: "الرجاء ادخال العنوان",
                  }}
                />
              </div>
            </>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex justify-between max-w-[600px] mx-auto">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="font-cairoBold text-sm bg-blue-500"
          >
            إضافة
          </Button>
          <Button className="font-cairoBold text-sm">إلغاء</Button>
        </div>
      </section>
    </div>
  );
}

export default AddAdmin;
