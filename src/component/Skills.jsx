import React from "react";
import {
  FaCss3Alt,
  FaFigma,
  FaGit,
  FaHtml5,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="py-[20px] flex flex-col gap-[30px]">
      <div className="font-Sora text-[16px] md:text-[40px] font-semibold text-[#fbfbfb] md:leading-[72px] tracking-[1px]">
        here are the skills I have
      </div>
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaHtml5 className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">HTML</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaCss3Alt className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="">
              <IoLogoJavascript className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center pr-4">
              <h3 className="text-4xl">javascript</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaReact className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">React</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <SiTailwindcss className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">React</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaGit className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Git</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaPhp className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">PHP</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#3bf686] bg-slate-400 text-navbar hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 justify-center items-center">
            <div className="mx-auto">
              <FaFigma className="text-5xl" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl">Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
