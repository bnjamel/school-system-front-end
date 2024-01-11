import React, { useState } from "react";
import { Stepper, Step } from "@material-tailwind/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [selectedClass, setSelectedClass] = useState();
  const [selectedDivision, setSelectedDivision] = useState();

  // handleClassSelect,
  // selectedClass,
  // selectedDivision,
  // handleDivisionSelect,

  const handleClassSelect = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDivisionSelect = (e) => {
    setSelectedDivision(e.target.value);
  };

  // ----------Images --------
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [fileName, setFileName] = useState("No file selected");

  const [residenceCard, setResidenceCard] = useState();
  const [residenceCardPreview, setResidenceCardPreview] = useState();
  const [residenceCardName, setRecidenceCardName] = useState();

  const [identificationCard, setIdentificationCard] = useState();
  const [identificationCardPreview, setIdentificationCardPreview] = useState();
  const [identificationCardName, setIdentificationCardName] = useState();

  const [document, setDocument] = useState();
  const [documentPreview, setDocumentPreview] = useState();
  const [documentName, setDocuementName] = useState();
  // ----------Images --------

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

  const handleUploadDocument = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setDocument(e.target.files[0]);
      setDocumentPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);

  const handlePrev = () => {
    if (isFirstStep) {
      navigate("/login");
    }

    !isFirstStep && setActiveStep((cur) => cur - 1);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("birthdate", data?.date);
    formData.append("email", data?.email);
    formData.append("gender", data?.gender);
    formData.append("location", data?.location);
    formData.append("name", data?.name);
    formData.append("parent", data?.parent);
    formData.append("phone_number", data?.phone_number);
    formData.append("classId", selectedClass);
    formData.append("divisionId", selectedDivision);

    formData.append("image", image);
    formData.append("identification_card", identificationCard);
    formData.append("residence_card", residenceCard);
    formData.append("student_document_image", document);

    axios
      .post("http://localhost:3001/pending/", formData)
      .then((res) => {
        if (!res.error) {
          console.log("is pending");
          navigate("/pending");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/pending");
  };

  const activeDiv = (activeTab) => {
    switch (activeTab) {
      case 0:
        return (
          <Step1
            control={control}
            handleNext={handleSubmit(handleNext)}
            handlePrev={handlePrev}
            isLastStep={isLastStep}
            setIsLastStep={setIsLastStep}
          />
        );
      case 1:
        return (
          <Step2
            control={control}
            handleNext={handleSubmit(handleNext)}
            handlePrev={handlePrev}
            isLastStep={isLastStep}
            setIsLastStep={setIsLastStep}
            handleImageUpload={handleImageUpload}
            handleUploadResidenceCard={handleUploadResidenceCard}
            handleUploadIdentificationCard={handleUploadIdentificationCard}
            handleUploadDocument={handleUploadDocument}
            image={image}
            // setImage={setImage}

            imagePreview={imagePreview}
            // setImagePreview={setImagePreview}

            residenceCard={residenceCard}
            // setResidenceCard={setResidenceCard}

            residenceCardPreview={residenceCardPreview}
            // setResidenceCardPreview={setResidenceCardPreview}

            identificationCard={identificationCard}
            // setIdentificationCard={setIdentificationCard}

            identificationCardPreview={identificationCardPreview}
            // setIdentificationCardPreview={setIdentificationCardPreview

            document={document}
            documentPreview={documentPreview}
          />
        );
      case 2:
        return (
          <Step3
            control={control}
            handleNext={handleSubmit(handleNext)}
            handlePrev={handlePrev}
            isLastStep={isLastStep}
            setIsLastStep={setIsLastStep}
            onSubmit={handleSubmit(onSubmit)}
            selectedClass={selectedClass}
            handleClassSelect={handleClassSelect}
            selectedDivision={selectedDivision}
            setSelectedDivision={setSelectedDivision}
            handleDivisionSelect={handleDivisionSelect}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[7rem]">
      <div className="w-full md:w-[60%]  px-8 self-center">
        <h1 dir="rtl" className="pb-4 font-cairoBold text-lg text-[#999999]">
          تسجيل طالب جديد
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
