import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="py-[20px] flex flex-col gap-[30px] mb-4">
      <div className="font-Sora text-[16px] md:text-[40px] font-semibold text-[#fbfbfb] md:leading-[72px] tracking-[1px]">
        Get in Touch
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 rounded-xl gap-8">
        <div className="bg-[#323443] p-4 rounded-xl md:col-span-2 shadow-xl hover:shadow-[#3bf686] ease-in duration-300">
          <img
            src={require("../assets/project-unsplash1.jpg")}
            alt="me"
            className="rounded-xl"
          />
          <h4 className="mt-4 text-white font-Poppins font-semibold">
            Annisa Rahmadani
          </h4>
          <p className="font-Poppins text-white text-base text-[14px]">
            Fullstack Developer
          </p>
          <p className="mt-2 font-Poppins text-white text-[14px]">
            I am available for freelance or full-time positions. <br />
            Contact me and lets talk.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/annisa-rahmadani-b7a99a355/"
              target="_blank"
            >
              <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-4 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://github.com/Annisarh" target="_blank">
              <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-4 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-[#323443] p-4 rounded-xl md:col-span-3 shadow-xl hover:shadow-[#3bf686] ease-in duration-300">
          <form
            action="https://getform.io/f/amdmwvwb"
            method="POST"
            encType="multipart/form-data"
            target="_blank"
            className="pb-2"
          >
            <div className="grid grid-cols md:grid-cols-2 gap-4 w-full mb-2">
              <div>
                <label htmlFor="nama" className="text-white">
                  Nama
                </label>
                <input
                  type="text"
                  name="nama"
                  id="nama"
                  className="bg-white rounded-lg p-2 flex outline-black w-full mt-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-white">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-white rounded-lg p-2 flex outline-black w-full mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white p-2 rounded-lg outline-black mt-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="subjek" className="text-white">
                Subjek
              </label>
              <input
                type="text"
                id="subjek"
                className="w-full bg-white p-2 rounded-lg outline-black mt-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="pesan" className="text-white">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="30"
                rows="5"
                className="w-full bg-white p-2 rounded-lg outline-black mt-2"
              ></textarea>
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="submit"
                className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] h-[40px] lg:h-[45px] cursor-pointer"
                value="send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
