import "./App.css";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div
      id="porto"
      className="px-[30px] md:px-[100px] w-full bg-black-2 flex flex-col"
    >
      <Navbar />
      <div className="mt-[70px] md:mt-[100px]">
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Main />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <About />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Skills />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Projects />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Contact />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
