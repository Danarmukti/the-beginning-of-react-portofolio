import "../styles/about.css";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

function about() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolorum
          deserunt, suscipit enim esse nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officiis
          aliquam doloremque perspiciatis incidunt ipsum amet illum! Voluptatem
          dicta ullam quia obcaecati, pariatur repudiandae neque.
        </p>
        <h4>Programming Language</h4>
        <div className="skills">
          <FaReact />
          <FaPhp />
          <FaBootstrap />
          <FaJava />
          <IoLogoJavascript />
          <SiMysql />
          <DiJqueryLogo />
        </div>
      </div>
    </section>
  );
}

export default about;
