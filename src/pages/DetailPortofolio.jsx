import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { portofolioList } from "../data/DataPortofolio";
import "../styles/DetailPortofolio.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Scroll from "../components/scrollToTop.jsx";

function DetailPortofolio() {
  const { id } = useParams();
  const data = portofolioList.find((item) => item.id === id);

  if (data === undefined) {
    return <Navigate to="/404Page-Not-Found" />;
  }

  return (
    <>
      <Navbar />
      <section id="detail-portfolio">
        <div className="wrapper">
          <h3>{data.title}</h3>
          <img src={data.image} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nesciunt animi! Repellendus corporis quia possimus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
            harum? Dolorum esse at quos, id nam sunt perferendis quo rem
            consequatur adipisci doloremque harum mollitia dignissimos dolore
            aliquam? Fugit dolorum sed quos molestiae esse non expedita, hic,
            cumque harum asperiores, obcaecati autem? Aspernatur dolorum
            voluptatibus soluta a adipisci error placeat?
          </p>
          <p className="skill">{data.Skill}</p>
        </div>
      </section>
      <Footer />
      <Scroll />
    </>
  );
}

export default DetailPortofolio;
