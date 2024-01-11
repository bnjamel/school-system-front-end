import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../components/CustomInput";
import axios from "axios";

function Step3({
  handleNext,
  handlePrev,
  isLastStep,
  setIsLastStep,
  onSubmit,
  control,
  handleClassSelect,
  selectedClass,
  selectedDivision,
  handleDivisionSelect,
  setSelectedDivision,
}) {
  const [studentClass, setStudentClass] = useState("");
  const [studentDivision, setStudentDivision] = useState("");
  const navigate = useNavigate();
  const [classList, setClassList] = useState([]);
  const [divisionList, setDivisionList] = useState();

  const classOptions = [
    {
      id: 1,
      name: "اول",
    },
    {
      id: 2,
      name: "ثاني",
    },
    {
      id: 3,
      name: "ثالث",
    },
    {
      id: 4,
      name: "رابع",
    },
    {
      id: 5,
      name: "خامس",
    },
    {
      id: 6,
      name: "سادس",
    },
  ];

  const divisionOptions = [
    {
      id: 1,
      name: "شعبة أ",
    },
    {
      id: 2,
      name: "شعبة ب",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/class")
      .then((response) => {
        if (response.data) {
          setClassList(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // setDivisionList(selectedClass.Divisions);
    axios
      .get(`http://localhost:3001/division/byClass/${selectedClass}`)
      .then((res) => {
        setDivisionList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedClass]);

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
            <select
              value={selectedClass}
              onChange={handleClassSelect}
              className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              // defaultValue={defaultV}
            >
              <option value="">الصف</option>
              {classList.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>

            {selectedClass && (
              <select
                value={selectedDivision}
                onChange={handleDivisionSelect}
                disabled={selectedClass ? false : true}
                className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              >
                <option value="">الشعبة</option>
                {divisionList &&
                  divisionList.length > 0 &&
                  divisionList.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </select>
            )}

            {!selectedClass && (
              <select
                disabled={true}
                className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
              >
                <option value="">الشعبة</option>
              </select>
            )}

            {/* {classList && (
              <CustomInput
                control={control}
                name={"division"}
                placeholder={"الشعبة"}
                type={"select"}
                options={divisionList}
                rules={{
                  required: "الرجاء ادخال الشعبة",
                }}
              />
            )} */}

            {/* SELECT
            <div className="flex flex-col items-start font-cairoRegular ">
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"

                // className=" rounded-md text-black/50 border border-gray-500/50 focus:border-black/50 transition ease-in-out px-2  cursor-pointer"
              >
                <option value="">اختر الصف</option>
                <option value="اول">اول</option>
                <option value="ثاني">ثاني</option>
                <option value="ثالث">ثالث</option>
                <option value="رابع">رابع</option>
                <option value="خامس">خامس</option>
                <option value="سادس">سادس</option>
              </select>
            </div>

            <div className="flex flex-col items-start font-cairoRegular ">
              <select
                value={studentDivision}
                onChange={(e) => setStudentDivision(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"

                // className=" rounded-md text-black/50 border border-gray-500/50 focus:border-black/50 transition ease-in-out px-2  cursor-pointer"
              >
                <option value="">اختر الشعبة</option>
                <option value="أ">شعبة أ</option>
                <option value="ب">شعبة ب</option>
                <option value="ج">شعبة ج</option>
              </select>
            </div> */}
          </div>
        </form>
      </section>
      <div className="flex justify-between">
        {isLastStep ? (
          <Button
            className="font-cairoBold text-sm bg-blue-500"
            onClick={() => onSubmit()}
          >
            تسجيل
          </Button>
        ) : (
          <Button
            className="font-cairoBold text-sm bg-blue-500"
            onClick={handleNext}
          >
            التالي
          </Button>
        )}
        <Button className="font-cairoBold text-sm" onClick={handlePrev}>
          رجوع
        </Button>
      </div>
    </div>
  );
}

export default Step3;
