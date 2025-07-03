import React from "react";
import { facebook, globe, instagram, twitter } from "../assets/svg/svg";

const Main = () => {
  return (
    <div id="home" className="py-[30px] flex flex-col md:gap-[70px] gap-[30px]">
      <div className="font-Sora font-bold md:text-[48px] text-[24px] md:leading-[72px] md:tracing-[1px] w-full md:w-[80%] bg-[linear-gradient(134deg,_#38F686_40.75%,_#4CA9FF_90.52%)] text-transparent bg-clip-text">
        Hi Im Annisa Rahmadani, a software engineer with various programming
        language and little curiosity
      </div>
      <div className="flex flex-col md:flex-row gap-[30px]">
        <div className="flex-[2]">
          <div className="text-[15px] md:text-[28px] font-Sora text-[#d6d6d5] md:leading-[72px] ">
            What I do
          </div>
          <div className="text-[12px] md:text-[18px] text-[#d6d6d6] text-left">
            Create the computer applications that allow users to do specific
            tasks and the underlying systems that run the divices or control
            networks. I also do Freelance and teach programming in youtube.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:justify-normal md:flex-row gap-[30px] flex-[3]">
          <div className="relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300">
            <div className="absolute top-[-36px] p-[1px] rounded-full bg-[linear-gradient(134deg,_#38F686_40.75%,_#4CA9FF_90.52%)]">
              <div className="bg-[#3a3636] p-[17px] rounded-full">{globe}</div>
            </div>
            <div className="font-Sora text-white text-[16px] md:text-[24px] font-semibold md:leading-[72px] leading-[55px] tracking-[1px]">
              Freelance
            </div>
            <div className="text-[#d6d6d5] text-[14px] tracing-[1px] leading-6">
              Most of the freelance work I take is as a frontend engineer, but
              also open for opportunity.
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center px-3 pt-8 pb-4 w-[262px] bg-[#323443] rounded-[12px] mt-[36px] md:mt-0 hover:scale-110 ease-in-out duration-300">
            <div className="absolute top-[-36px] p-[1px] rounded-full bg-[linear-gradient(134deg,_#38F686_40.75%,_#4CA9FF_90.52%)]">
              <div className="bg-[#3a3636] p-[17px] rounded-full">{globe}</div>
            </div>
            <div className="font-Sora text-white text-[16px] md:text-[24px] font-semibold md:leading-[72px] leading-[55px] tracking-[1px]">
              Content Creator
            </div>
            <div className="text-[#d6d6d5] text-[14px] tracing-[1px] leading-6">
              Teach various programming language in youtube, The channel Called
              Kyaroku.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-[35px] md:mt-[45px]">
        <div className="flex items-center justify-center md:justify-normal gap-3">
          <div className="md:w-[160px] md:h-[160px] w-[50px] h-[50px] rounded-full bg-[linear-gradient(134deg,_#38F686_40.75%,_#4CA9FF_90.52%)] flex justify-center items-center">
            <div className="md:w-[157px] md:h-[157px] w-[49px] h-[49px] rounded-full bg-[#3a3636]">
              <img
                src={require("../assets/icon-portofolio.png")}
                alt="Icon-portofolio"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-2 md:ml-9 mr-5 flex-1 max-w-[499px]">
          <div className="text-[16px] md:text-[28px] font-Sora text-[#fbfbfb] leading-[72px] ">
            Life Goals
          </div>
          <div className="text-[10px] md:text-[18px] text-[#d6d6d6]">
            My greatest mission or life goal is to share every knowledge I have
            acquired for the benefit of the development of technology human
            resources in Indonesia.
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-[35px] md:mt-2.5 md:ml-[70px] ml-2">
          <div className="font-Sora text-[15px] md:text-[28px] text-[#fbfbfb] md:leading-[72px">
            Lets Connect
          </div>
          <div className="flex gap-[17px]">
            <div className="hover:scale-[150%] ease-in-out duration-300 cursor-pointer">
              {instagram}
            </div>
            <div className="hover:scale-[150%] ease-in-out duration-300 cursor-pointer">
              {twitter}
            </div>
            <div className="hover:scale-[150%] ease-in-out duration-300 cursor-pointer">
              {facebook}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
