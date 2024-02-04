import { Link } from "react-router-dom";
import HeroBgAnimation from "./HeroBgAnimation/index.jsx";
import Typewriter from "typewriter-effect";

function About() {
  return (
    
      <div className="flex  justify-around items-center aboutDiv">
        
        <div className=" flex flex-col  pl-48 pt-5 aboutContentDiv">
          <div className="text-6xl font-extrabold py-2">Hi, I am</div>
          <div className="text-6xl font-extrabold py-2">Atul Singh</div>
          <div className="flex text-3xl ">
            <div className=" font-extrabold py-2 ">I am a </div>
            <div className=" font-extrabold py-2 mx-3 ">
              <Typewriter
                options={{
                  strings: ["<span style='color: green;'>Frontend Developer</span>"],
                  autoStart: true,
                  loop: true,
                  
                }}
              />
            </div>
          </div>
          <p className="text-stone-600 leading-7 text-2xl py-4 text-wrap">
            Highly skilled and motivated developer with two years of experience
            in HTML, CSS and JavaScript, seeking a challenging position to
            leverage my expertise in frontend web development.
          </p>

          <Link
            to="https://drive.google.com/file/d/1H5oixa1zjnWQMZzgO27V0ZtCVBsXMMS_/view?usp=sharing"
            target="_blank"
            className="button-33"
            role="button"
          >
            Resume
          </Link>
        </div>
        <div className=" pr-20 imageDiv">
          <div className=" relative top-10">
            <HeroBgAnimation />
          </div>
          <div className=" w-72  relative bottom-32 left-28">
            <img
              className="rounded-full border-solid border-green-600 border-4 "
              src="../../public/static/image.jpg"
              alt="Atul"
            />
          </div>
        </div>
      </div>
    
  );
}

export default About;
