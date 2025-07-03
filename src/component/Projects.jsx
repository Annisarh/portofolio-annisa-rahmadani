import React from "react";
import ProjectItems from "./ProjectItems";
import ProjectImg from "../assets/project-unsplash1.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className="py-[20px] flex flex-col gap-[30px]">
        <div className="font-Sora text-[16px] md:text-[40px] font-semibold text-[#fbfbfb] md:leading-[72px] tracking-[1px]">
          What I have Build
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProjectItems
            title="Sistem Pakar"
            backgroundImg={ProjectImg}
            projectUrl="https://github.com/Annisarh/sistem-penunjang-keputusan-perpanjang-kontrak-kerja"
            tech="Laravel"
          />
          <ProjectItems
            title="Sistem Pakar"
            backgroundImg={ProjectImg}
            projectUrl="https://github.com/Annisarh/sistem-penunjang-keputusan-perpanjang-kontrak-kerja"
            tech="Laravel"
          />
          <ProjectItems
            title="Sistem Pakar"
            backgroundImg={ProjectImg}
            projectUrl="https://github.com/Annisarh/sistem-penunjang-keputusan-perpanjang-kontrak-kerja"
            tech="Laravel"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
