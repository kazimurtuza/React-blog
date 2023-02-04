import Container from "./Container";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import Sectionhead from "../element/SectionHead";
import "../../style/LargeBlogCardSection.css";
const LargeBlogCardSection = (props) => {
  const navigate = useNavigate();
  const dataList = props.data ? props.data : [];
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
        {}
        {dataList.map((data) => (
          <BlogCard data={data} />
        ))}
      </div>
    </div>
  );
};
export default LargeBlogCardSection;
