import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Scroll from "../components/scrollToTop.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSportsTennis } from "react-icons/md";
import { MdOutlineMonitor } from "react-icons/md";

function experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Experience</h3>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            iconStyle={{ background: "#17223a", color: "#fff" }}
            icon={<MdOutlineSportsTennis />}
          >
            <div style={{ marginBottom: "10px" }}>
              <span
                style={{
                  background: "#17223a",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                Social Media Admin
              </span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Badminton Court Admin
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta</h4>
            <p>
              Management schedule player, Cleaning Badminton Court, Social Media
              Admin,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#17223a", color: "#fff" }}
            icon={<MdOutlineMonitor />}
          >
            <div style={{ marginBottom: "10px" }}>
              <span
                style={{
                  background: "#17223a",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                Canva
              </span>
              <span
                style={{
                  background: "#17223a",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                Figma
              </span>
              <span
                style={{
                  background: "#17223a",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                Photoshop
              </span>
              <span
                style={{
                  background: "#17223a",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "10px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                Illustrator
              </span>
            </div>
            <h3 className="vertical-timeline-element-title">
              Graphic Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remaja Masjid
            </h4>
            <h4 className="vertical-timeline-element-subtitle">Jakarta</h4>
            <p>Creative Banner, Flyer, Social Media Post.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <Scroll />
    </>
  );
}

export default experience;
