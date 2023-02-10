import Container from "./Container";
import BlogCardSmall from "./BlogcardSmall";
import Sectionhead from "../element/SectionHead";
import { useNavigate } from "react-router-dom";
import "../../style/LargeBlogCardSection.css";
const SmallBlogCardSection = (props) => {
  const navigate = useNavigate();
  const smallCardListView = () => {
    navigate("/small-card-list");
  };

  return (
    <div className="lrgCardSection">
      <Sectionhead>
        <ul>
          <li>Techno</li>
          <li onClick={smallCardListView}>View More</li>
        </ul>
      </Sectionhead>

      <div className="largcarlist">
        {props.data.map((data) => (
          <BlogCardSmall post={data} />
        ))}
      </div>
    </div>
  );
};
export default SmallBlogCardSection;
