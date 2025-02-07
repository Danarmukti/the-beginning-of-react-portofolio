import ProfilePic from "../assets/Foto.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img className="profile-pic" src={ProfilePic} alt={ProfilePic} />
        <h3>
          Danar <span className="blue-teks">Mukti</span> Wibowo
        </h3>
        <p>Web Programmer | Graphic Designer</p>
        <div className="socialMedia">
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaGithub />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default header;
