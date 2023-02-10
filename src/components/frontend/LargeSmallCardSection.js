import Container from "./Container";
import BlogCard from "./BlogCard";
import BlogCardSmall from "./BlogcardSmall";
import Sectionhead from "../element/SectionHead";
import "../../style/LargeBlogCardSection.css";
const LargeSmallCardSection = (props) => {
  return (
    <div className="lrgCardSection">
      <Sectionhead>
        <ul>
          <li>Techno</li>
          <li>View More</li>
        </ul>
      </Sectionhead>

      <div className="largcarlist">
        <BlogCard data={props.data[0]} />
        <div>
          {props.data.map(
            (data, index) =>
              index > 0 && index < 4 && <BlogCardSmall post={data} />
          )}
        </div>

        <BlogCard data={props.data[4]} />
      </div>
    </div>
  );
};
export default LargeSmallCardSection;
