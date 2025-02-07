import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function navbar() {
  const [statusTampil, setStatusTampil] = useState("");

  function tampilMenu() {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/the-beginning-of-react-portofolio">danarmuktiw</Link>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <FaBars /> : <IoClose />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#portofolio">Portofolio</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
