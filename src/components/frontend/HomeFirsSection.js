import Topslider from "./Topslider";
import "../../style/homeFirestSection.css";
import BlogCard from "./BlogCard";
import BlogCardSmall from "./BlogcardSmall";
import LargeBlogCardSection from "./LargeBlogCardSection";
import { AiOutlineRotateRight } from "react-icons/ai";
import SmallBlogCardSection from "./SmallBlogSection";
import LargeSmallCardSection from "./LargeSmallCardSection";
import EposodeBlogCardSection from "./EpisodeBlogCardSection";

const HomeFirstSection = () => {
  return (
    <>
      <div className="firstsectionheigh">
        <div className="firstsection">
          <div className="left">
            <Topslider />

            <div className="topsectionSecondPart">
              {/* <BlogCard /> */}
              <BlogCardSmall />
              <BlogCardSmall />
            </div>
          </div>
          <div className="category">
            <div>
              <div className="categoryHead">
                <span className="iconst">
                  <AiOutlineRotateRight />
                </span>
                <h2>Go to your favorite category quickly</h2>
              </div>
              <ul>
                <li>Event Section</li>
                <li>Episode Section</li>
                <li>Innovation</li>
                <li>Popular </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LargeBlogCardSection />
      </div>
      <EposodeBlogCardSection />
      <SmallBlogCardSection />
      <LargeSmallCardSection />
    </>
  );
};

export default HomeFirstSection;
