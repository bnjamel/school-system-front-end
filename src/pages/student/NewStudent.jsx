import React from "react";
import { Stepper, Step } from "@material-tailwind/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function NewStudent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const activeDiv = (activeTab) => {
    switch (activeTab) {
      case 0:
        return <Step1 handleNext={handleNext} handlePrev={handlePrev} />;
      case 1:
        return <Step2 handleNext={handleNext} handlePrev={handlePrev} />;
      case 2:
        return <Step3 handleNext={handleNext} handlePrev={handlePrev} />;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      {/* STEPPER */}
      <div className="w-full md:w-[60%]  px-8 self-center">
        <h1 dir="rtl" className="pb-4 font-cairoBold text-lg text-[#999999]">
          إضافة طالب
        </h1>
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step className="cursor-pointer" onClick={() => setActiveStep(0)}>
            1
          </Step>
          <Step className="cursor-pointer" onClick={() => setActiveStep(1)}>
            2
          </Step>
          <Step className="cursor-pointer" onClick={() => setActiveStep(2)}>
            3
          </Step>
        </Stepper>
        {/* CALL */}
        <div dir="rtl">{activeDiv(activeStep)}</div>
      </div>
    </div>
  );
}

export default NewStudent;
