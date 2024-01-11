import React from "react";
import { Button } from "@material-tailwind/react";
import CustomInput from "../../components/CustomInput";

function Step2({
  handleNext,
  handlePrev,
  control,
  onSubmit,
  handleSubjectSelect,
  selectedSubject,
  subjectsList,
}) {
  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          الرجاء ادخال المعلومات المهنية
        </h2>

        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            <CustomInput
              control={control}
              name={"degree"}
              type="text"
              placeholder="الشهادة"
              rules={{
                required: "الرجاء إدخال شهادة الاستاذ",
              }}
            />

            <select
              value={selectedSubject}
              onChange={(e) => handleSubjectSelect(e)}
              className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              // defaultValue={defaultV}
            >
              <option value="">المادة</option>
              {subjectsList &&
                subjectsList.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>

            <CustomInput
              control={control}
              name={"experience"}
              type="number"
              placeholder="سنوات الخبرة"
              min={0}
              rules={{
                required: "الرجاء إدخال عدد سنوات الخبرة",
              }}
            />
          </div>
        </form>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between">
        <Button
          className="font-cairoBold text-sm bg-blue-500"
          onClick={onSubmit}
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
