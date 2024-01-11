import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { useStateValue } from "../../context/StateProvider";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

function Schedule() {
  const { id } = useParams();
  const [{ user }, dispatch] = useStateValue();
  const [divisionData, setDivisionData] = useState();
  const [subjectList, setSubjectList] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState();

  // lessons
  const [firstLesson, setFirstLesson] = useState();
  const [secondLesson, setSecondLesson] = useState();
  const [thirdLesson, setThirdLesson] = useState();
  const [fourthLesson, setFourthLesson] = useState();
  const [fifthLesson, setFifthLesson] = useState();
  const [sixthLesson, setSixthLesson] = useState();
  //

  const handleOpen = () => setOpen(!open);

  const handleEditClick = (schedule) => {
    setSelectedSchedule(schedule);
    handleOpen();
  };

  const { data, isPending, error } = useFetch(
    `http://localhost:3001/schedule/byDivId/${id}`,
    "GET",
    null
  );

  const getData = async () => {
    const res = await axios
      .get(`http://localhost:3001/division/${id}`)
      .then((response) => {
        setDivisionData(response.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
    return res;
  };

  useEffect(() => {
    getData();

    axios
      .get("http://localhost:3001/subject/")
      .then((res) => {
        setSubjectList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFirstLesson("");
    setSecondLesson("");
    setThirdLesson("");
    setFourthLesson("");
    setFifthLesson("");
    setSixthLesson("");
  }, [open]);

  const editSchedule = () => {
    if (data) {
      const info = {
        first_lesson: firstLesson ? firstLesson : selectedSchedule.first_lesson,
        second_lesson: secondLesson
          ? secondLesson
          : selectedSchedule.second_lesson,
        third_lesson: thirdLesson ? thirdLesson : selectedSchedule.third_lesson,
        fourth_lesson: fourthLesson
          ? fourthLesson
          : selectedSchedule.fourth_lesson,
        fifth_lesson: fifthLesson ? fifthLesson : selectedSchedule.fifth_lesson,
        sixth_lesson: sixthLesson ? sixthLesson : selectedSchedule.sixth_lesson,
      };
      axios
        .put(`http://localhost:3001/schedule/${selectedSchedule.id}`, info)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      handleOpen();
      window.location.reload();
    }
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[1000px] flex flex-col pt-[12rem]">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center  justify-center mb-6 ">
        <h1 className="font-cairoRegular text-2xl text-[#999999]">
          صف {divisionData?.Class?.name} شعبة {divisionData?.name}
        </h1>
      </div>

      {/* Modal */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="max-h-[90vh] overflow-y-scroll hide-scrollbar"
      >
        <DialogHeader>
          <div dir="rtl" className="flex justify-start w-full">
            <h1>جدول يوم ال{selectedSchedule?.Day.name}</h1>
          </div>
        </DialogHeader>
        <DialogBody>
          {data && (
            <div dir="rtl">
              {/* 1 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس الاول
                </Typography>
                <select
                  value={firstLesson}
                  defaultValue={selectedSchedule?.first_lesson}
                  defaultChecked={selectedSchedule?.first_lesson}
                  onChange={(e) => setFirstLesson(e.target.value)}
                  placeholder={data?.first_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.first_lesson}>
                    {selectedSchedule?.first_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* 2 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس الثاني
                </Typography>
                <select
                  value={secondLesson}
                  defaultValue={selectedSchedule?.second_lesson}
                  defaultChecked={selectedSchedule?.second_lesson}
                  onChange={(e) => {
                    setSecondLesson(e.target.value);
                  }}
                  placeholder={data?.second_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.second_lesson}>
                    {selectedSchedule?.second_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* 3 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس الثالث
                </Typography>
                <select
                  value={thirdLesson}
                  defaultValue={selectedSchedule?.third_lesson}
                  defaultChecked={selectedSchedule?.third_lesson}
                  onChange={(e) => {
                    setThirdLesson(e.target.value);
                  }}
                  placeholder={data?.third_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.third_lesson}>
                    {selectedSchedule?.third_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* 4 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس الرابع
                </Typography>
                <select
                  value={fourthLesson}
                  defaultValue={selectedSchedule?.fourth_lesson}
                  defaultChecked={selectedSchedule?.fourth_lesson}
                  onChange={(e) => setFourthLesson(e.target.value)}
                  placeholder={data?.fourth_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.fourth_lesson}>
                    {selectedSchedule?.fourth_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* 5 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس الخامس
                </Typography>
                <select
                  value={fifthLesson}
                  defaultValue={selectedSchedule?.fifth_lesson}
                  defaultChecked={selectedSchedule?.fifth_lesson}
                  onChange={(e) => {
                    setFifthLesson(e.target.value);
                  }}
                  placeholder={data?.fifth_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.fifth_lesson}>
                    {selectedSchedule?.fifth_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>

              {/* 6 */}
              <div className="mt-6">
                <Typography
                  dir="rtl"
                  variant="h6"
                  color="white"
                  className="font-cairoRegular mix-blend- text-black mt-6"
                >
                  الدرس السادس
                </Typography>
                <select
                  value={sixthLesson}
                  defaultValue={selectedSchedule?.sixth_lesson}
                  defaultChecked={selectedSchedule?.sixth_lesson}
                  onChange={(e) => {
                    setSixthLesson(e.target.value);
                  }}
                  placeholder={data?.sixth_lesson}
                  className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                  // defaultValue={defaultV}
                >
                  <option value={selectedSchedule?.sixth_lesson}>
                    {selectedSchedule?.sixth_lesson}
                  </option>
                  {subjectList &&
                    subjectList.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="font-cairoBold">الغاء</span>
          </Button>
          <Button variant="gradient" color="purple" onClick={editSchedule}>
            <span className="font-cairoBold">تعديل</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 mx-10 lg:mx-0">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-lg">
          <thead className="ltr:text-left rtl:text-right bg-blue-50 ">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 ">
                اليوم
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الأول
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الثاني
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الثالث
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الرابع
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس الخامس
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                الدرس السادس
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <p className="text-transparent pointer-events-none ">تعديل</p>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data &&
              data.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 border-l border-black/25 ">
                    {item?.Day?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.first_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.second_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.third_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.fourth_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.fifth_lesson}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {item?.sixth_lesson}
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <FiEdit
                        size={20}
                        className="text-black cursor-pointer hover:scale-125 transition"
                        onClick={() => handleEditClick(item)}
                      />
                    ) : (
                      <FiEdit
                        size={20}
                        className="opacity-0 pointer-events-none"
                      />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Schedule;
