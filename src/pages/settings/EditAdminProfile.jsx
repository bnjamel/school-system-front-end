import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { useStateValue } from "../../context/StateProvider";
import useFetch from "../../customHooks/useFetch";
import { useForm } from "react-hook-form";
import axios from "axios";
import CustomInput from "../../components/CustomInput";
import imagePlaceholder from "../../assets/images/profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function EditAdminProfile() {
  const [{ user, endpoint }, dispatch] = useStateValue();
  const [formData, setFormData] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  const navigate = useNavigate();

  const types = ["image/png", "image/jpeg"];

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
      birthdate: formData ? formData.birthdate : "",
      degree: formData ? formData.degree : "",
      experience: formData ? formData.experience : "",
      location: formData ? formData.location : "",
      password: formData ? formData.password : "",
      email: formData ? formData.email : "",
    },
  });

  const getData = async () => {
    await axios
      .get(`${endpoint}admin/byId/${user.id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [user]);

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
        email: data.email ? data.email : formData.email,
        password: data.password ? data.password : formData.password,
        phone_number: data.phone_number
          ? data.phone_number
          : formData.phone_number,
        location: data.location ? data.location : formData.location,
        degree: data.degree ? data.degree : formData.degree,
        experience: data.experience ? data.experience : formData.experience,
        birthdate: data.birthdate ? data.birthdate : formData.birthdate,
      };

      form_data.append("name", info.name);
      form_data.append("birthdate", info.birthdate);
      form_data.append("degree", info.degree);
      form_data.append("experience", info.experience);
      form_data.append("email", info.email);
      form_data.append("password", info.password);
      form_data.append("location", info.location);
      form_data.append("phone_number", info.phone_number);
      form_data.append("image", image);
      // console.log(info);

      axios
        .put(`${endpoint}admin/${user.id}`, form_data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      window.location.reload();
    }
  };

  return (
    <div dir="rtl" className="mx-auto max-w-[600px] flex flex-col py-10">
      {/* FORM */}
      <section class="max-w-4xl  p-6  dark:bg-gray-800 mb-6 font-cairoRegular">
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
                <div className="my-2">
                  <CustomInput
                    label={"الاسم"}
                    name={"name"}
                    type={"text"}
                    placeholder={formData.name}
                    control={control}
                    rules={{}}
                  />
                </div>

                <div className="my-2">
                  <CustomInput
                    label={"البريد الالكتروني"}
                    name={"email"}
                    type={"email"}
                    placeholder={formData.email}
                    control={control}
                    rules={{}}
                  />
                </div>

                <div className="my-2">
                  <CustomInput
                    label={"كلمة المرور"}
                    name={"password"}
                    type={"password"}
                    placeholder={formData.password}
                    control={control}
                    rules={{}}
                  />
                </div>

                <div className="my-2">
                  <CustomInput
                    label={"الشهادة"}
                    name={"degree"}
                    type={"text"}
                    placeholder={formData.degree}
                    control={control}
                    rules={{}}
                  />
                </div>
                <div className="my-2">
                  <CustomInput
                    label={"سنوات الخبرة"}
                    name={"experience"}
                    type={"number"}
                    placeholder={formData.experience}
                    control={control}
                    rules={{}}
                  />
                </div>
                <div className="my-2">
                  <CustomInput
                    label={"تاريخ الميلاد"}
                    name={"birthdate"}
                    type={"date"}
                    placeholder={formData.birthdate}
                    control={control}
                    rules={{}}
                  />
                </div>
                <div className="my-2">
                  <CustomInput
                    label={"العنوان"}
                    name={"location"}
                    type={"text"}
                    placeholder={formData.location}
                    control={control}
                    rules={{}}
                  />
                </div>
                <div className="my-2">
                  <CustomInput
                    label={"رقم الهاتف"}
                    name={"phone_number"}
                    type={"text"}
                    placeholder={formData.phone_number}
                    control={control}
                    rules={{}}
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

export default EditAdminProfile;
