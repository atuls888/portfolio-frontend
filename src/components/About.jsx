import { Link } from "react-router-dom";
import HeroBgAnimation from "./HeroBgAnimation/index.jsx";
import Typewriter from "typewriter-effect";
import Image from "../assets/image.jpg";


function About() {
  return (
    <div className="flex  justify-around items-center aboutDiv p-20">
      <div className=" flex flex-col  pl-48 pt-5 aboutContentDiv">
        <div className="text-6xl font-extrabold py-2">Hi, I am</div>
        <div className="text-6xl font-extrabold py-2">Atul Singh</div>
        <div className="flex text-3xl ">
          <div className=" font-extrabold py-2 ">I am a </div>
          <div className=" font-extrabold py-2 mx-3 ">
            <Typewriter
              options={{
                strings: [
                  "<span style='color: green;'>Software Developer</span>",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <p className="text-stone-600 leading-7 text-2xl py-4 text-wrap">
          Software Engineer with 4+ years of experience building and deploying
          web apps using Google Apps Script, JavaScript, AppSheet, React, HTML,
          and CSS. Skilled in automating workflows, integrating APIs, and
          optimizing user interfaces for performance and scalability across the
          Google ecosystem.
        </p>

        <Link
          to="https://drive.google.com/file/d/1aO1cwUtxhy0PGK3CaKy9MwbS5ADySONO/view?usp=sharing"
          target="_blank"
          className="button-33"
          role="button"
        >
          <span className="text-green-700">Resume</span>
        </Link>
      </div>
      <div className=" pr-20 imageDiv">
        <div className=" relative top-10">
          <HeroBgAnimation />
        </div>
        <div className=" w-72  relative bottom-32 left-28">
          <img
            className="rounded-full border-solid border-green-600 border-4 "
            src={Image}
            alt="Atul"
          />
        </div>
      </div>
    </div>
  );
}
//https://i.ibb.co/gDTJdhr/image.jpg
export default About;
