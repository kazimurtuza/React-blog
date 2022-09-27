import Container from "./Container";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import Sectionhead from "../element/SectionHead";
import "../../style/LargeBlogCardSection.css";
const LargeBlogCardSection = () => {
  const navigate = useNavigate();
  const showAllData = () => {
    navigate("/blog-list");
  };
  return (
    <div className="lrgCardSection">
      <Sectionhead>
        <ul>
          <li>Techno</li>
          <li onClick={showAllData}>View More</li>
        </ul>
      </Sectionhead>

      <div className="largcarlist">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
export default LargeBlogCardSection;
