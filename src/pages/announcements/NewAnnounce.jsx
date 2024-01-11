import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import axios from "axios";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { useStateValue } from "../../context/StateProvider";

const announcementTypes = [
  {
    id: 1,
    name: "عام",
  },
  {
    id: 2,
    name: "نشاط",
  },
  {
    id: 3,
    name: "امتحان",
  },
  {
    id: 4,
    name: "ضروري",
  },
];

function NewAnnounce() {
  const [{ user }, dispatch] = useStateValue();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [imageError, setImageError] = useState();

  console.log(user.id);

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const types = ["image/png", "image/jpeg"];

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    image(null);
    setImagePreview(null);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    if (!image) {
      console.log("Add Image");
    } else {
      let year = new Date().getFullYear();
      let month = (new Date().getMonth() + 1).toString().padStart(2, "0");
      let day = new Date().getDate().toString().padStart(2, "0");
      let hours = new Date().getHours().toString().padStart(2, "0");
      let minutes = new Date().getMinutes().toString().padStart(2, "0");

      let period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const date = `${year}-${month}-${day} ${hours}:${minutes} ${period}`;

      formData.append("cover", image);
      formData.append("title", data.title);
      formData.append("body", data.body);
      formData.append("date", date);
      formData.append("type", data.type);
      formData.append("UserId", user.id);

      axios
        .post("http://localhost:3001/announcement/", formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* COVER */}
      <div dir="rtl" className="w-full h-[14rem] rounded-md self-center">
        <label
          htmlFor="image"
          className={`cursor-pointer ${
            imagePreview ? "border-transparent" : "border-blue-200"
          } rounded-md items-end flex h-full transition ease-in-out border-2 border-dashed  hover:opacity-90`}
        >
          {!imagePreview && (
            <>
              <div className="items-center flex px-6 py-4">
                <div className="bg-[#091420] rounded-full p-2 items-center ml-4">
                  <BiImageAdd className="text-2xl text-white " />
                </div>

                <h2 className="font-cairoBold text-2xl text-black ">
                  اضف غلاف للتبليغ
                </h2>
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
          {imagePreview && (
            <>
              <img
                src={imagePreview}
                className="img w-full h-full object-cover"
              />
            </>
          )}
        </label>
      </div>
      {/* ALL OF IT / JUSTIFIED CENTERED / FOR THE MOBILE */}
      <div className="flex flex-col justify-center self-center items-center lg:self-auto lg:block">
        {/* TEXT */}
        <div className="my-6">
          <CustomInput
            control={control}
            name={"title"}
            placeholder={"عنوان التبليغ"}
            type={"text"}
            rules={{
              required: "الرجاء إدخال عنوان للتبليغ",
            }}
          />
        </div>

        <div className="my-6 font-cairoBold">
          <CustomInput
            control={control}
            name={"body"}
            placeholder={"اكتب محتوى التبليغ"}
            type={"textArea"}
            rules={{
              required: "الرجاء أكتب محتوى للتبليغ",
            }}
          />
        </div>

        <div className="flex flex-col items-start font-cairoRegular mb-10 w-60">
          <CustomInput
            control={control}
            type={"select"}
            name={"type"}
            options={announcementTypes}
            placeholder={"نوع التبليغ"}
            rules={{
              required: "الرجاء إدخال نوع التبليغ",
            }}
          />
        </div>
        {/* BUTTON */}
        <div>
          <button
            onClick={handleSubmit(onSubmit)}
            className="transition ease-in-out hover:scale-[1.04] active:scale-[.99] md:flex px-6 text-lg font-cairoSemiBold py-2 rounded-md text-white bg-[#5B91D0] ml-4 "
          >
            نشر التبليغ
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewAnnounce;
