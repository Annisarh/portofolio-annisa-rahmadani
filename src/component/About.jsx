import React from "react";

const About = () => {
  return (
    <div id="about" className="py-[20px] flex flex-col gap-[30px]">
      <div className="font-Sora text-[16px] md:text-[40px] font-semibold text-[#fbfbfb] md:leading-[72px] tracking-[1px]">
        Let me tell you a little more about myself
      </div>
      <div className="w-full flex flex-col justify-center md:flex-row md:items-stretch gap-[20px] md:gap-[30px]">
        <img
          src={require("../assets/photo-2.jpg")}
          alt="aboutMe"
          className="w-[300px] rounded-xl md:h-[300px]"
        />
        <div className="bg-[#323443] p-[20px] text-slate-300 rounded-[10px] md:mr-20 w-full">
          <div className="text-[14px] md:text-[18px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            sit beatae quisquam ipsum odio et nesciunt voluptas magnam eligendi,
            aliquid nemo aut sequi velit numquam dignissimos qui fuga id
            deserunt?. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque dolorum eligendi cupiditate commodi aliquam fugit nulla
            officiis error, ut minus recusandae dolor id quae voluptate tenetur
            enim eos neque! Debitis!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
