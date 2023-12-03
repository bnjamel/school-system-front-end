import React from "react";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";
import { FaIdCard, FaRegTrashAlt } from "react-icons/fa";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";

function Step2({ handleNext, handlePrev, isLastStep, setIsLastStep }) {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [fileName, setFileName] = useState("No file selected");

  const [residenceCard, setResidenceCard] = useState();
  const [residenceCardPreview, setResidenceCardPreview] = useState();
  const [residenceCardName, setRecidenceCardName] = useState();

  const [identificationCard, setIdentificationCard] = useState();
  const [identificationCardPreview, setIdentificationCardPreview] = useState();
  const [identificationCardName, setIdentificationCardName] = useState();

  const types = ["image/png", "image/jpeg"];

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFileName(selected.name);
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUploadResidenceCard = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setRecidenceCardName(selected.name);
      setResidenceCard(e.target.files[0]);
      setResidenceCardPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUploadIdentificationCard = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setIdentificationCardName(selected.name);
      setIdentificationCard(e.target.files[0]);
      setIdentificationCardPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
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

  const removeImage = () => {
    setFileName("No file selected");
    setImage(null);
  };

  return (
    <div>
      {/* FORM */}
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 className="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          ادخل الصف والشعبة
        </h2>
        {/* FORM */}
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <input
                type="text"
                placeholder="الصف"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="group"
                type="text"
                placeholder="الشعبة"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="group"
                type="text"
                placeholder="عن الطالب"
                className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="border border-blue-500 px-8 py-1.5 rounded w-fit">
              <label
                htmlFor="image"
                className=" cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80 w-fit"
              >
                <div className="items-center flex">
                  <h2 className="font-cairoBold text-[#938D8D]">إضافة صورة</h2>
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
                    <p className="text-[18px] font-cairoSemiBold">{fileName}</p>
                  </>
                )}
              </label>

              {/* -------------- */}

              <label
                htmlFor="residence_card"
                className=" cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80 w-fit"
              >
                <div className="items-center flex">
                  <h2 className="font-cairoBold text-[#938D8D]">
                    إضافة بطاقة السكن
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="residence_card"
                  name="residence_card"
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
                    <p className="text-[18px] font-cairoSemiBold">
                      {residenceCardName}
                    </p>
                  </>
                )}
              </label>

              {/* -------------- */}

              {/* -------------- */}

              <label
                htmlFor="identification_card"
                className=" cursor-pointer hover:bg-blue-500 hover:text-white  transition ease-in-out hover:opacity-80 w-fit"
              >
                <div className="items-center flex">
                  <h2 className="font-cairoBold text-[#938D8D]">
                    إضافة الهوية
                  </h2>
                  <div className="bg-blue-500 rounded-full p-1.5 items-center mr-4">
                    <HiOutlineUpload className="text-2xl text-white " />
                  </div>
                </div>
                <input
                  id="identification_card"
                  name="identification_card"
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
                    <p className="text-[18px] font-cairoSemiBold">
                      {identificationCardName}
                    </p>
                  </>
                )}
              </label>

              <Button className="" onClick={(e) => handleSubmit(e)}>
                Submit
              </Button>
              {/* -------------- */}

              {/* {image && (
                <button
                  className="my-2 bg-red-400 p-2 rounded hover:opacity-80 transition ease-in-out"
                  onClick={removeImage}
                >
                  <FaRegTrashAlt className="text-[24px] text-light-100" />
                </button>
              )} */}
            </div>
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
