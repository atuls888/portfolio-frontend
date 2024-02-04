import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import Calendar from "./Calendar/Calendar";



function Contact() {
  const mailBody = `mailto:atuls878@gmail.com?subject=Let's Connect&body=Hi Atul,%0D`;
  return (
    <div className=" flex justify-around items-center">
      <div id="contactDiv" className="mt-12 gap-36">
    {/* <div > */}
    <div className="flex flex-col contactContetnDiv pr-10">
          <h1 className="text-8xl font-extrabold mb-12">{`Let's Connect`}</h1>
          <p className="text-2xl font-extrabold ">
            Feel free to reach out to me for any questions or opportunities!
          </p>
          <div className="flex gap-10 mt-7 contactIconDiv">
            <Link to={mailBody}>
              <MailIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/in/atul-singh-a662b8110"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
            <Link to="https://github.com/atuls888" target="_blank">
              <GitHubIcon />
            </Link>
          </div>
        </div>
        <div className="w-96  flex flex-col justify-start items-center cardShadow p-5" style={{height:'500px'}}>
          <h1 className="text-2xl font-extrabold">Schedule a Meet</h1>
          <div>
            <Calendar/>
          </div>
        </div>
    {/* </div> */}
      </div>
    </div>
  );
}

export default Contact;
