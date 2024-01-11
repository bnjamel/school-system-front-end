import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../../components/CustomInput";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imagePlaceholder from "../../../assets/images/profile.png";
import { FiEdit } from "react-icons/fi";

const evaluationOptions = [
  {
    id: 1,
    name: "ممتاز",
  },
  {
    id: 2,
    name: "جيد",
  },
  {
    id: 3,
    name: "مقبول",
  },
  {
    id: 4,
    name: "سيء",
  },
];

function EditProfile() {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [formData, setFormData] = useState();
  const [classList, setClassList] = useState([]);
  const [divisionList, setDivisionList] = useState([]);
  const [selectedClass, setSelectedClass] = useState();
  const [selectedDivision, setSelectedDivision] = useState();

  const navigate = useNavigate();

  const handleClassSelect = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDivisionSelect = (e) => {
    setSelectedDivision(e.target.value);
  };

  // Form Controllers
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: formData ? formData.name : "",
      phone_number: formData ? formData.phone_number : "",
      gender: formData ? formData.gender : "",
      image: formData ? formData.image : "",
      birthdate: formData ? formData.birthdate : "",
      location: formData ? formData.location : "",
      password: formData ? formData.password : "",
      email: formData ? formData.email : "",
    },
  });

  const types = ["image/png", "image/jpeg"];

  useEffect(() => {
    axios
      .get(`http://localhost:3001/student/byId/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.log(error));

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

  const handleImageUpload = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setImage(null);
  };

  const onSubmit = (data) => {
    if (formData) {
      const form_data = new FormData();
      const info = {
        name: data.name ? data.name : formData.name,
        parent: data.parent ? data.parent : formData.parent,
        phone_number: data.phone_number
          ? data.phone_number
          : formData.phone_number,
        email: data.email ? data.email : formData.email,
        password: data.password ? data.password : formData.password,
        location: data.location ? data.location : formData.location,
        birthdate: data.birthdate ? data.birthdate : formData.birthdate,
        gender: data.gender ? data.gender : formData.gender,
        evaluation: data.evaluation ? data.evaluation : formData.evaluation,
        about: data.about ? data.about : formData.about,

        classId:
          Number(selectedClass) !== formData.ClassId
            ? selectedClass
            : formData.ClassId,
        divisionId:
          Number(selectedDivision) !== formData.ClassId
            ? selectedDivision
            : formData.DivisionId,
      };

      form_data.append("name", info.name);
      form_data.append("birthdate", info.birthdate);
      form_data.append("email", info.email);
      form_data.append("password", info.password);
      form_data.append("location", info.location);
      form_data.append("classId", info.classId);
      form_data.append("divisionId", info.divisionId);
      form_data.append("image", image);
      form_data.append("phone_number", info.phone_number);
      form_data.append("about", info.about);
      form_data.append("evaluation", info.evaluation);
      form_data.append("gender", info.gender);
      form_data.append("parent", info.parent);

      axios
        .put(`http://localhost:3001/student/${id}`, form_data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    // navigate(-1);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col pt-[12rem]">
      {/* FORM */}
      <section className="max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mb-6 font-cairoRegular">
        {/* Profile Picture */}
        <div
          dir="rtl"
          className="flex flex-col justify-center mt-4 items-center"
        >
          <label
            htmlFor="image"
            className={`cursor-pointer  rounded-full self-center flex w-[8rem] h-[8rem] transition ease-in-out border border-transparent hover:border-light-400/50 hover:opacity-90`}
          >
            {!formData?.image ? (
              <>
                <div className="relative">
                  {imagePreview ? (
                    <div className="avatar h-[150px] w-[150px] overflow-hidden">
                      <div className="w-full h-full bg-black rounded-full overflow-hidden">
                        <img
                          src={imagePreview}
                          className="img w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="avatar h-[150px] w-[150px] overflow-hidden">
                        <div className="w-full h-full">
                          <img
                            src={imagePlaceholder}
                            className="object-cover w-full"
                          />
                        </div>
                      </div>
                      <div className="items-center flex  absolute bottom-[-10px]">
                        <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                          <FiEdit className="text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="relative">
                <div className="avatar">
                  <div className="">
                    <img
                      width={150}
                      height={150}
                      src={"http://localhost:3001/images/" + formData?.image}
                      className=" rounded-full object-cover h-full w-full"
                    />
                  </div>
                </div>
                <div className="items-center flex  absolute bottom-[-10px]">
                  <div className="bg-[#091420] cursor-pointer p-4 rounded-full">
                    <FiEdit className="text-white" />
                  </div>
                </div>
              </div>
            )}
            <input
              id="image"
              name="image"
              type="file"
              className="hidden"
              accept={types}
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Details */}
        <div className="my-8 flex flex-col md:flex-row justify-between items-center md:items-start mx-auto max-w-[500px]">
          <div className="w-full">
            {formData && (
              <>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"name"}
                    label={"اسم الطالب الثلاثي"}
                    placeholder={formData.name}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"parent"}
                    label={"ولي امر الطالب"}
                    placeholder={formData.parent}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"phone_number"}
                    label={"رقم هاتف ولي امر الطالب"}
                    placeholder={formData.phone_number}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"email"}
                    label={"البريد الالكتروني"}
                    placeholder={formData.email}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"password"}
                    label={"كلمة المرور"}
                    placeholder={formData.password}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"location"}
                    label={"العنوان"}
                    placeholder={formData.location}
                  />
                </div>
                <div className="mt-6">
                  {/* <CustomInput
                    type="select"
                    control={control}
                    name={"class"}
                    options={classList}
                    label={"الصف"}
                    placeholder={formData.Class.name}
                    defaultValue={formData.Class.name}
                  /> */}
                  <select
                    value={selectedClass}
                    onChange={handleClassSelect}
                    className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                    // defaultValue={defaultV}
                  >
                    <option value={formData.ClassId}>
                      {formData.Class.name}
                    </option>
                    {classList.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* !! Fix This !!*/}
                <div className="mt-6">
                  <select
                    value={selectedDivision}
                    onChange={handleDivisionSelect}
                    disabled={selectedClass ? false : true}
                    className={`w-full px-4 ${
                      selectedClass ? "border-gray-200" : "border-light-100"
                    } text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300`}
                  >
                    <option value={formData.DivisionId}>
                      {formData.Division.name}
                    </option>
                    {divisionList.length > 0 &&
                      divisionList.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                  {/* <CustomInput
                    type="select"
                    control={control}
                    name={"division"}
                    label={"الشعبة"}
                    options={divisionList}
                    // placeholder={formData.Division.name}
                    defaultV={formData.Division.name}
                  /> */}
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="date"
                    control={control}
                    name={"birthdate"}
                    label={"تاريخ الميلاد"}
                    placeholder={formData.birthdate}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="select"
                    control={control}
                    name={"gender"}
                    label={"الجنس"}
                    options={[
                      {
                        id: 1,
                        name: "ذكر",
                      },
                      {
                        id: 2,
                        name: "انثى",
                      },
                    ]}
                    placeholder={formData.gender}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="select"
                    control={control}
                    name={"evaluation"}
                    options={evaluationOptions}
                    label={"تقييم الطالب"}
                    placeholder={formData.evaluation}
                    defaultV={formData.evaluation}
                  />
                </div>
                <div className="mt-6">
                  <CustomInput
                    type="textArea"
                    control={control}
                    name={"about"}
                    label={"عن الطالب"}
                    placeholder={formData.about}
                  />
                </div>
              </>
            )}
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex justify-between max-w-[600px] mx-auto">
          <Button
            onClick={handleSubmit(onSubmit)}
            className="font-cairoBold text-sm bg-blue-500"
          >
            حفظ التغييرات
          </Button>
          <Button className="font-cairoBold text-sm">إلغاء</Button>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
