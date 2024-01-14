import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import imagePlaceholder from "../../assets/images/profile.png";
import { useStateValue } from "../../context/StateProvider";

function Step3({
  handleNext,
  handlePrev,
  formData,
  addTeacher,
  selectedSubject,
  subjectsList,
  image,
  imagePreview,
}) {
  const [selectedItem, setSelectedItem] = useState();
  const [{ endpoint }] = useStateValue();
  // const selectedItem = Number(selectedSubject);
  // const subject = subjectsList.filter((sub) => sub.id === selectedItem);

  useEffect(() => {
    axios
      .get(`${endpoint}subject/${selectedSubject}`)
      .then((res) => setSelectedItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* FORM */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular">
        <h2 class="text-lg font-cairoSemiBold border-b border-black pb-4 text-[#091420] dark:text-white">
          مراجعة وتأكيد المعلومات
        </h2>
        {/* Profile Picture */}
        <div className="flex flex-col justify-center mt-6 items-center">
          {imagePreview ? (
            <div className="avatar">
              <div className="">
                <img
                  width={150}
                  height={150}
                  src={imagePreview}
                  className=" rounded-full"
                />
              </div>
            </div>
          ) : (
            <>
              <div className="relative">
                <div className="avatar">
                  <div className="">
                    <img
                      width={150}
                      height={150}
                      src={imagePlaceholder}
                      className=" rounded-full"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
          <h2 className="font-cairoBold text-md mt-2">{formData.name}</h2>
        </div>
        {/* Details */}
        <div className="mt-8">
          <div className="">
            <h3 className="font-cairoSemiBold">البريد الالكتروني</h3>
            <p className="text-[#333333]">{formData.email}</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">كلمة السر</h3>
            <p className="text-[#333333]">{formData.password}</p>
          </div>
          <div className="">
            <h3 className="font-cairoSemiBold">تاريخ الميلاد</h3>
            <p className="text-[#333333]">{formData.birthdate}</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">العنوان</h3>
            <p className="text-[#333333]">{formData.location}</p>
          </div>
          <div>
            <h3 className="font-cairoSemiBold">الشهادة</h3>
            <p className="text-[#333333]">{formData.degree}</p>
          </div>
          <div className="my-2">
            <h3 className="font-cairoSemiBold">المادة</h3>

            <p className="text-[#333333]">
              {selectedItem && selectedItem.name}
            </p>
          </div>
          <div>
            <h3 className="font-cairoSemiBold">سنوات الخبرة</h3>
            <p className="text-[#333333]">{formData.experience} سنوات</p>
          </div>
        </div>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between">
        <Button
          className="font-cairoBold text-sm bg-blue-500"
          onClick={addTeacher}
        >
          إضافة
        </Button>
        <Button className="font-cairoBold text-sm" onClick={handlePrev}>
          رجوع
        </Button>
      </div>
    </div>
  );
}

export default Step3;
