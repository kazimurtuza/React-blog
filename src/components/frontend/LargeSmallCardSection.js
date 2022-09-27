import Container from "./Container";
import BlogCard from "./BlogCard";
import BlogCardSmall from "./BlogcardSmall";
import Sectionhead from "../element/SectionHead";
import "../../style/LargeBlogCardSection.css";
const LargeSmallCardSection = () => {
  return (
    <div className="lrgCardSection">
      <Sectionhead>
        <ul>
          <li>Techno</li>
          <li>View More</li>
        </ul>
      </Sectionhead>

      <div className="largcarlist">
        <BlogCard />
        <div>
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
        </div>
        <BlogCard />
      </div>
    </div>
  );
};
export default LargeSmallCardSection;
