import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

function NewClass() {
  const [numberOfDivisions, setNumberOfDivisions] = useState([]);

  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const handleAddField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };

  const handleRemoveField = (e, id) => {
    e.preventDefault();
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const onAdd = (newItem) => {
    numberOfDivisions.push(newItem);
    console.log(numberOfDivisions.length);
  };

  useEffect(() => {}, [numberOfDivisions]);

  return (
    <div
      dir="rtl"
      className="mx-auto max-w-[1000px] flex flex-col pt-[12rem] px-8 md:px-0"
    >
      <h1 className="pb-4 font-cairoBold text-lg text-[#999999] w-full md:w-[60%] self-center">
        إضافة صف جديد
      </h1>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 my-6 font-cairoRegular w-full md:w-[60%] py-8 px-8 self-center">
        {/* FORM */}
        <form>
          <div className="grid grid-cols-1 gap-6  ">
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
                className=" block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              {fields.map((field) => (
                <div className="flex my-4">
                  <input
                    id="group"
                    type="text"
                    placeholder="الشعبة"
                    value={field.value}
                    onChange={() => handleChange(field.id, field.value)}
                    className=" block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                  <button
                    className="px-4  justify-center items-center"
                    onClick={(e) => handleRemoveField(e, field.id)}
                  >
                    <FaRegTrashAlt className="text-red-400 w-[20px]  h-[20px]" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Profile Picture */}
        </form>
        <button
          onClick={handleAddField}
          className="cursor-pointer transition ease-in-out hover:opacity-80 w-fit "
        >
          <div className="items-center flex mt-6  ">
            <div className="bg-blue-500 rounded-full p-1.5 items-center ml-4">
              <FiPlus className="text-2xl text-white " />
            </div>
            <h2 className="font-cairoBold text-[#938D8D]">إضافة شعبة اخرى</h2>
          </div>
        </button>
      </section>
      {/* BUTTONS */}
      <div className="flex justify-between w-full md:w-[60%] self-center">
        <Button type="submit" className="font-cairoBold text-sm bg-blue-500">
          إضافة
        </Button>
        <Link to="/class">
          <Button className="font-cairoBold text-sm">رجوع</Button>
        </Link>
      </div>
    </div>
  );
}

export default NewClass;
