import Skill from "./Skills.Component";

function Skills() {
  return (
    // <div className="flex gap-10 p-10">
    <div className="skills">
      <Skill
        link="/about"
        skills={[
          "Google Calendar API",
          "Vitejs",
          "Tailwindcss",
          "Node.js",
          "Express",
          "React Router",
          "Google Sheets",
          "Material UI",
        ]}
        projectName="Portfolio"
        description="Created a custom Calendar in Vite to schedule Google meet events using Google Calendar API, Sheets, Node.js and Express. Tailwindcss and Material UI for design and React Router to navigate between pages.  "
      />
      <Skill
        target="_blank"
        link="https://main--lucent-pie-98f53b.netlify.app/"
        skills={[
          "D3.js",
          "React Router",
          "CSS",
          "Vitejs",
          "Javascript",
          "Material UI",

          "React.js",
          "HTML",
        ]}
        projectName="Dashboard"
        description="Dashboard UI with different sections using Vite. Genrating random data sets using a button to populate different graphs using D3.js. UI created using Material UI and CSS. React Router to switch between pages."
      />
      <Skill
        target="_blank"
        link="https://gorgeous-cobbler-fbd0db.netlify.app/"
        skills={["Redux Toolkit", "Vitejs", "Javascript", "HTML", "CSS"]}
        projectName="Todo"
        description="TODO app with add, remove and update functionality using Vite. Centralised store created using Redux tool kit to add, remove and update stored todo using slices. Material UI and CSS for design.  "
      />
      <Skill
        target="_blank"
        link="https://lustrous-quokka-3ea1bf.netlify.app/"
        skills={["Vitejs", "Javascript", "HTML", "CSS"]}
        projectName="Password Gen."
        description="Password generator app using Vite, HTML, CSS and javascript with option to toggel length, include numbers and special characters and copy to clipbord option using window object. "
      />
    </div>
  );
}

export default Skills;
