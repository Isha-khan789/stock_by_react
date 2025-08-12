import React from "react";
import img from "../../assets/text.png";

const Input = () => {
  return (
    <div className="w-full min-h-screen lg:w-[751px] bg-black rounded-xl flex flex-col font-display">
      <div className="p-5">
        <h3>Personal Informations</h3>
        <hr className="flex-grow border-gray-700 mt-3" />

        <div className=" flex items-start gap-4 justify-start mt-5">
          <div className="w-14 h-14 flex  rounded-full bg-purple-300 overflow-hidden">
            <img
              src={img}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-gray-600 ">
              We only support .JPG, .JPEG, or .PNG file.
            </h4>

            <div className=" flex items-center gap-4">
              <div className="rounded-3xl bg-[#2CC884] px-6 py-3">
                <h3 className="text-md font-medium font-display text-white">
                  Upload your Photo
                </h3>
              </div>
              <h2 className="font-display text-[#2CC884]">Delete Image</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-6 mb-4">
        <div>
          <label className="block text-sm mb-1 text-[#718096]">
            First Name
          </label>

          <input
            type="text"
            name=""
            placeholder=""
            className=" bg-zinc-800 rounded-md w-full p-4"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">Last Name</label>

          <input
            type="text"
            name=""
            placeholder=""
            className=" bg-zinc-800 rounded-md w-full p-4 "
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">Email</label>

          <input
            type="email"
            name=""
            placeholder=""
            className="bg-zinc-800 rounded-md w-full p-4 "
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">
            Phone no (Optional)
          </label>

          <input
            type="tel"
            name=""
            placeholder=""
            className=" bg-zinc-800 rounded-md w-full p-4 "
          />
        </div>
      </div>
      <h3 className="font-display text-xl p-2 ml-5">Personal Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div>
          <label className="block text-sm mb-1 text-[#718096]">
            Country or Region
          </label>

          <input
            type="text"
            placeholder=""
            className="bg-zinc-800 p-3 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">City</label>

          <input
            type="text"
            placeholder=""
            className="bg-zinc-800 p-3 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">Address</label>

          <input
            type="text"
            placeholder=""
            className="bg-zinc-800 p-3 rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-[#718096]">
            Postal Code
          </label>

          <input
            type="text"
            placeholder=""
            className="bg-zinc-800 p-3 rounded-md w-full"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-[#264B96] px-10 py-2 mb-5 mr-5 rounded-full text-white font-semibold">
          Save
        </button>
      </div>
    </div>
  );
};

export default Input;
