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
import { useStateValue } from "../../../context/StateProvider";

function TeacherEdit() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [subjectList, setSubjectList] = useState([]);
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState();
  const [{ endpoint }] = useStateValue();

  const handleSubjectSelect = (e) => {
    setSelectedSubject(e.target.value);
  };

  const getData = async () => {
    await axios
      .get(`${endpoint}teacher/byId/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.log(error));

    await axios
      .get(`${endpoint}subject/`)
      .then((response) => {
        setSubjectList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

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
      image: formData ? formData.image : "",
      degree: formData ? formData.degree : "",
      gender: formData ? formData.gender : "",
      experience: formData ? formData.experience : "",
      subject: formData ? formData.Subject : "",
      birthdate: formData ? formData.birthdate : "",
      location: formData ? formData.location : "",
      password: formData ? formData.password : "",
      email: formData ? formData.email : "",
    },
  });

  const types = ["image/png", "image/jpeg"];

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
    // console.log(data);
    if (formData) {
      const info = {
        name: data.name ? data.name : formData.name,
        email: data.email ? data.email : formData.email,
        password: data.password ? data.password : formData.password,
        phone_number: data.phone_number
          ? data.phone_number
          : formData.phone_number,
        location: data.location ? data.location : formData.location,
        degree: data.degree ? data.degree : formData.degree,
        experience: data.experience ? data.experience : formData.experience,
        birthdate: data.birthdate ? data.birthdate : formData.birthdate,
        SubjectId: selectedSubject ? selectedSubject : formData.SubjectId,
        gender: data.gender ? data.gender : formData.gender,
      };
      const form_Data = new FormData();
      form_Data.append("name", info.name);
      form_Data.append("birthdate", info.birthdate);
      form_Data.append("degree", info.degree);
      form_Data.append("experience", info.experience);
      form_Data.append("email", info.email);
      form_Data.append("password", info.password);
      form_Data.append("location", info.location);
      form_Data.append("subjectId", info.SubjectId);
      form_Data.append("phone_number", info.phone_number);
      form_Data.append("gender", info.gender);
      form_Data.append("image", image);

      axios
        .put(`${endpoint}teacher/${id}`, form_Data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    navigate(-1);
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col pt-[12rem]">
      {/* FORM */}
      <section class="max-w-4xl  p-6 bg-white rounded-md shadow-md dark:bg-gray-800 mb-6 font-cairoRegular">
        {/* Profile Picture */}
        <div
          dir="rtl"
          className="flex flex-col justify-center mt-4 items-center"
        >
          <label
            htmlFor="image"
            className={`cursor-pointer rounded-full self-center flex w-[8rem] h-[8rem] transition ease-in-out border border-transparent hover:opacity-90`}
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
                      src={`${endpoint}images/` + formData?.image}
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
        <div className="my-8 flex flex-col md:flex-row justify-between items-center md:items-start mx-auto max-w-[500px] ">
          <div className="w-full">
            {formData && (
              <>
                <div className="mt-6">
                  <CustomInput
                    type="text"
                    control={control}
                    name={"name"}
                    label={"اسم الاستاذ الثلاثي"}
                    placeholder={formData.name}
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
                    name={"phone_number"}
                    label={"رقم الهاتف"}
                    placeholder={formData.phone_number}
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
                  <CustomInput
                    type="text"
                    control={control}
                    name={"degree"}
                    label={"الشهادة"}
                    placeholder={formData.degree}
                  />
                </div>

                <div className="mt-6">
                  <CustomInput
                    type="number"
                    control={control}
                    name={"experience"}
                    label={"سنوات الخبرة"}
                    placeholder={formData.experience}
                    defaultV={formData.experience}
                  />
                </div>

                <div className="mt-6">
                  <select
                    value={selectedSubject}
                    defaultValue={formData.Subject}
                    defaultChecked={formData.Subject}
                    onChange={(e) => handleSubjectSelect(e)}
                    className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
                    // defaultValue={defaultV}
                  >
                    <option value={formData.Subject.id}>
                      {formData?.Subject.name}
                    </option>
                    {subjectList &&
                      subjectList.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                  </select>
                  {/* <CustomInput
                    type="select"
                    control={control}
                    name={"subject"}
                    options={subjectList}
                    label={"المادة"}
                    placeholder={formData.Subject.name}
                    defaultV={formData.Subject.name}
                  /> */}
                </div>

                {/* !! Fix This !!*/}

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

export default TeacherEdit;
