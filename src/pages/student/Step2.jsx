import React from "react";
import { Button } from "@material-tailwind/react";

function Step2({ handleNext, handlePrev }) {
  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          ادخل الصف والشعبة
        </h2>
        {/* FORM */}
        <form>
          <div class="grid grid-cols-1 gap-6 mt-4 ">
            <div>
              <input
                type="text"
                placeholder="الصف"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                id="group"
                type="text"
                placeholder="الشعبة"
                class="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
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
