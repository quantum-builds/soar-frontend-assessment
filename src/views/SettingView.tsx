import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditPencil, ProfilePic } from "../assets";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  dob: z.string().min(1, { message: "Date of Birth is required" }),
  permanentAddress: z.string().min(1, { message: "Address is required" }),
  postalCode: z.string().min(1, { message: "Postal Code is required" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters" }),
  city: z.string().min(1, { message: "City is required" }),
  presentAddress: z.string().min(1, { message: "Present Address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
});

type FormData = z.infer<typeof schema>;

const FORM_FIELD_DATA: {
  name: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
}[] = [
  {
    name: "name",
    label: "Your Name",
    placeholder: "Charlene Reed ",
    type: "text",
  },
  {
    name: "username",
    label: "Username",
    placeholder: "Charlene Reed ",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "charlenereed@gmail.com ",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "**********",
    type: "password",
  },
  {
    name: "dob",
    label: "Date of Birth",
    placeholder: "25 January 1990",
    type: "date",
  },
  {
    name: "presentAddress",
    label: "Present Address",
    placeholder: "San Jose, California, USA",
    type: "text",
  },
  {
    name: "permanentAddress",
    label: "Permanent Address",
    placeholder: "San Jose, California, USA",
    type: "text",
  },
  {
    name: "city",
    label: "City",
    placeholder: "San Jose",
    type: "text",
  },
  {
    name: "postalCode",
    label: "Postal Code",
    placeholder: "45962",
    type: "text",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "USA",
    type: "text",
  },
];

const NAV_DATA = [
  {
    name: "Edit Profile",
    href: "editProfile",
  },
  {
    name: "Preferences",
    href: "preferences",
  },
  {
    name: "Security",
    href: "security",
  },
];
const SettingView = () => {
  const [activeTab, setActiveTab] = useState("editProfile");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-full md:w-full bg-white md:bg-[#F5F7FA] flex flex-col gap-6 py-10 px-7">
      <div className="bg-white h-full w-full rounded-[25px] p-[30px]">
        <nav className="border-b-[1px]">
          <ul className="flex md:gap-[74px] md:justify-start justify-between">
            {NAV_DATA.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={() => handleTabChange(item.href)}
                  className={`block py-2 px-4 text-base font-medium ${
                    activeTab === item.href
                      ? "text-[#232323] border-b-4 border-black"
                      : "text-[#718EBF] hover:bg-blue-100 rounded-lg"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-16 py-10 px-8 md:flex-row md:gap-16">
          <div className="relative flex justify-center items-center md:block md:justify-start md:items-start">
            <div className="relative">
              <img
                src={ProfilePic}
                alt="User Profile"
                className="w-24 h-24 rounded-full"
              />
              <img
                src={EditPencil}
                alt="Edit"
                className="w-6 h-6 cursor-pointer absolute right-0 bottom-0"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 md:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FORM_FIELD_DATA.map((field) => (
                <div key={field.name}>
                  <label className="block text-base text-[#232323]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className="mt-2 text-[15px] px-5 py-4 block w-full bg-transparent rounded-[15px] border-[1px] border-[#DFEAF2] focus:outline-none"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs">
                      {errors[field.name]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex">
              <button
                type="submit"
                className="mt-10 py-[14px] px-[74px] bg-black text-white rounded-[15px] w-full md:w-auto ml-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingView;
