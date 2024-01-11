import React, { useEffect, useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewTeacher() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [selectedSubject, setSelectedSubject] = useState();
  const [subjectsList, setSubjectsList] = useState();

  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    degree: "",
    email: "",
    password: "",
    experience: "",
    gender: "",
    location: "",
    phone_number: "",
    subject: "",
    image: image,
  });
  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => {
    !isFirstStep && setActiveStep((cur) => cur - 1);
    navigate(-1);
  };

  const handleSubjectSelect = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      // setFileName(selected.name);
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/subject/")
      .then((res) => {
        setSubjectsList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (data) => {
    const info = {
      name: data.name,
      birthdate: data.birthdate,
      degree: data.degree,
      email: data.email,
      password: data.password,
      experience: data.experience,
      gender: data.gender,
      location: data.location,
      phone_number: data.phone_number,
      subject: data.subject,
      image: image,
    };

    setFormData(data);
    !isLastStep && setActiveStep((cur) => cur + 1);
  };

  const addTeacher = () => {
    console.log("adding");
    const form_Data = new FormData();
    form_Data.append("name", formData.name);
    form_Data.append("birthdate", formData.birthdate);
    form_Data.append("degree", formData.degree);
    form_Data.append("experience", formData.experience);
    form_Data.append("email", formData.email);
    form_Data.append("password", formData.password);
    form_Data.append("location", formData.location);
    form_Data.append("phone_number", formData.phone_number);
    form_Data.append("gender", formData.gender);
    form_Data.append("image", image);
    form_Data.append("SubjectId", selectedSubject);
    console.log(formData);
    console.log(image);

    axios
      .post("http://localhost:3001/teacher/", form_Data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // formData.append("", "");
    navigate("/teacher");
  };

  const activeDiv = (activeTab) => {
    switch (activeTab) {
      case 0:
        return (
          <Step1
            image={image}
            handleImageUpload={handleImageUpload}
            imagePreview={imagePreview}
            control={control}
            handleNext={handleSubmit(handleNext)}
            handlePrev={handlePrev}
          />
        );
      case 1:
        return (
          <Step2
            control={control}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSubjectSelect={handleSubjectSelect}
            selectedSubject={selectedSubject}
            onSubmit={handleSubmit(onSubmit)}
            subjectsList={subjectsList}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            control={control}
            handleNext={handleNext}
            handlePrev={handlePrev}
            addTeacher={addTeacher}
            selectedSubject={selectedSubject}
            subjectsList={subjectsList}
            imagePreview={imagePreview}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* STEPPER */}
      <div className="w-full md:w-[60%]  px-8 self-center">
        <h1 dir="rtl" className="pb-4 font-cairoBold text-lg text-[#999999]">
          إضافة أستاذ
        </h1>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step>1</Step>
          <Step>2</Step>
          <Step>3</Step>
        </Stepper>
        {/* CALL */}
        <div dir="rtl">{activeDiv(activeStep)}</div>
      </div>
    </div>
  );
}

export default NewTeacher;
