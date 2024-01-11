import React from "react";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaIdCard, FaRegTrashAlt } from "react-icons/fa";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";

function Step2({
  handleNext,
  handlePrev,
  isLastStep,
  setIsLastStep,
  handleImageUpload,
  handleUploadResidenceCard,
  handleUploadIdentificationCard,
  image,
  imagePreview,
  residenceCard,
  residenceCardPreview,
  identificationCard,
  identificationCardPreview,
  handleUploadDocument,
  document,
  documentPreview,
}) {
  // const [image, setImage] = useState();
  // const [imagePreview, setImagePreview] = useState();
  // const [fileName, setFileName] = useState("No file selected");

  // const [residenceCard, setResidenceCard] = useState();
  // const [residenceCardPreview, setResidenceCardPreview] = useState();
  // const [residenceCardName, setRecidenceCardName] = useState();

  // const [identificationCard, setIdentificationCard] = useState();
  // const [identificationCardPreview, setIdentificationCardPreview] = useState();
  // const [identificationCardName, setIdentificationCardName] = useState();

  const types = ["image/png", "image/jpeg"];

  // const handleImageUpload = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     setFileName(selected.name);
  //     setImage(e.target.files[0]);
  //     setImagePreview(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  // const handleUploadResidenceCard = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     setRecidenceCardName(selected.name);
  //     setResidenceCard(e.target.files[0]);
  //     setResidenceCardPreview(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  // const handleUploadIdentificationCard = (e) => {
  //   const selected = e.target.files[0];
  //   if (selected) {
  //     setIdentificationCardName(selected.name);
  //     setIdentificationCard(e.target.files[0]);
  //     setIdentificationCardPreview(URL.createObjectURL(e.target.files[0]));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", "علي محسن رياض");
    formData.append("birthdate", "2015-02-11");
    formData.append("email", "alihassan.student@school.com");
    formData.append("password", "1234");
    formData.append("location", "basra");
    formData.append("phone_number", "07824302343");
    formData.append("ClassId", "3");
    formData.append("DivisionId", "3");
    formData.append("parent", "محسن رياض وليد");
    formData.append("image", image);
    formData.append("identification_card", identificationCard);
    formData.append("residence_card", residenceCard);

    console.log(formData);

    // if (!formData) {
    //   console.log("error");
    // } else {
    //   await axios
    //     .post("http://localhost:3001/student", formData)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  };

  // const removeImage = () => {
  //   setFileName("No file selected");
  //   setImage(null);
  // };

  return (
    <div>
      {/* FORM */}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 className="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          الرجاء إضافة الاوراق المطلوبة
        </h2>
        {/* FORM */}
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            {/* ---- 1 --- */}
            <div className="border w-full py-2 text-gray-900 bg-white  border-gray-200 px-8 rounded">
              <label
                htmlFor="image"
                className="cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80"
              >
                <div className="flex justify-between items-center ">
                  <h2 className="font-cairoBold  text-[#938D8D]">
                    صورة الطالب الشخصية
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
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
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                  </>
                )}
              </label>
            </div>
            {/* ------- */}

            {/* --- 2 ---- */}
            <div className="border w-full py-2 text-gray-900 bg-white  border-gray-200 px-8 rounded">
              <label
                htmlFor="residenceCard"
                className="cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80"
              >
                <div className="flex justify-between items-center ">
                  <h2 className="font-cairoBold  text-[#938D8D]">
                    بطاقة السكن
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="residenceCard"
                  name="residenceCard"
                  type="file"
                  className="hidden"
                  accept={types}
                  onChange={handleUploadResidenceCard}
                />
                {residenceCardPreview && (
                  <>
                    <img
                      src={residenceCardPreview}
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                  </>
                )}
              </label>
            </div>
            {/* ------- */}

            {/* --- 3 ---- */}
            <div className="border w-full py-2 text-gray-900 bg-white  border-gray-200 px-8 rounded">
              <label
                htmlFor="identificationCard"
                className="cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80"
              >
                <div className="flex justify-between items-center ">
                  <h2 className="font-cairoBold  text-[#938D8D]">
                    هوية الطالب
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="identificationCard"
                  name="identificationCard"
                  type="file"
                  className="hidden"
                  accept={types}
                  onChange={handleUploadIdentificationCard}
                />
                {identificationCardPreview && (
                  <>
                    <img
                      src={identificationCardPreview}
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                  </>
                )}
              </label>
            </div>
            {/* ------- */}

            {/* --- 4 ---- */}
            <div className="border w-full py-2 text-gray-900 bg-white  border-gray-200 px-8 rounded">
              <label
                htmlFor="document"
                className="cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80"
              >
                <div className="flex justify-between items-center ">
                  <h2 className="font-cairoBold  text-[#938D8D]">
                    وثيقة الطالب
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="document"
                  name="document"
                  type="file"
                  className="hidden"
                  accept={types}
                  onChange={handleUploadDocument}
                />
                {documentPreview && (
                  <>
                    <img
                      src={documentPreview}
                      className="img w-[50px] h-[50px] object-contain"
                    />
                    {/* <p className="text-[18px] font-cairoSemiBold">{fileName}</p> */}
                  </>
                )}
              </label>
            </div>
            {/* ------- */}
          </div>
        </form>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between">
        <Button
          className="font-cairoBold text-sm bg-blue-500"
          onClick={handleNext}
        >
          التالي
        </Button>
        <Button className="font-cairoBold text-sm" onClick={handlePrev}>
          رجوع
        </Button>
      </div>
    </div>
  );
}

export default Step2;
