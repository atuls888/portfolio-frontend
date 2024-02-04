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
              src="https://lh3.googleusercontent.com/pw/ABLVV869Ycr4HaHSTJeAw4Nj2t2_bWeQBqC5-P440SUjfNrXPlSLSpuLQCUD7c6kiS1MyOM8JgK6o2qSGKdPP8Ut8JRSCsNTDJ3vQ0fhK6eVZkyx-EoNL4QNy15HdPjPGyH2c14D2BQfIRcZEWkmg3IL0ag7orfqQR76Sn9RwfHRSbxbObYYceorWWI0D33Bm93cyKnaLMniXEpgzCoE6vVJ6TTZbWiPR6BUC0DYepZn_yJr8UnmZf5ZztLJK45Soe9Cdf1XkD5H0f-KB6tLPVmXTG_McpTw0IukQXey_ZxkyW_cujzyXjc955t7sbhfqhfBUkkgy2ZvkRbbgRcq93SQ5X7n8AHQRH_5iDSebfvqfAbb-UxpaCdEecOx5BrbkdOdk_OiESIoGYgBKx8RP9jOrUwaDQ_8EKruOj4_AmzdVacWUTzZK0qISpZq6IDrGZPcksg5Sj4OUCcSyxCWC_YEZV6QhC4yB3Cafhi5DghuIZZT7LhBvrR49mEJtUV0CO8Vdhe2-bkbSJ4khDBFA_nLMugDzC34S2gU9pCjB26Eb4iDsBHTDhxIHlkple_wdbNp6cD7oQPeMi-QKvzs8JwGrdrmSmP8ZJT_J23qGg3ptjLH1L4X77ixwcknCWHavsCCh4Dyot-v1T4hka4cbhryt9NBUUbQzoxy11EBr11azrI5dyZoablZ2ACDUstVKNY-q-WmgWBvP9AhVUHm6FVnoE-XccfjoQOpbX9lAIsNXzPwTGlceP-k8vixQYuLdIZP8V0QDr0tpDo4-IZQ3qt0DwVARfQE7qa5ipGi4YXGI7qVU1yTlJb1cYeVmQzQ2IYpQguX7wQy72cizTUbNofZB_IAgKpGZ5lkm8UE5W4bLtBniwn_Ga7_yB5nyMm3o6O1CphFxVrDY2SmNMsXBJpzyDI=w659-h879-s-no-gm?authuser=0"
              alt="Atul"
            />
          </div>
        </div>
      </div>
    
  );
}

export default About;
