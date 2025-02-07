import Navbar from "../components/navbar";
import Header from "../components/header";
import Portofolio from "../components/portofolio";
import About from "../components/about";
import Footer from "../components/footer";
import "../styles/navbar.css";
import "../styles/header.css";
import "../styles/portofolio.css";

function home() {
  return (
    <>
      <Navbar />
      <Header />
      <Portofolio />
      <About />
      <Footer />
    </>
  );
}

export default home;
