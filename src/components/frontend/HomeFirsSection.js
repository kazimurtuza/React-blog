import Topslider from "./Topslider";
import "../../style/homeFirestSection.css";
import BlogCard from "./BlogCard";
import BlogCardSmall from "./BlogcardSmall";
import LargeBlogCardSection from "./LargeBlogCardSection";
import { AiOutlineRotateRight } from "react-icons/ai";
import SmallBlogCardSection from "./SmallBlogSection";
import LargeSmallCardSection from "./LargeSmallCardSection";
import EposodeBlogCardSection from "./EpisodeBlogCardSection";
import { useState } from "react";
import { useEffect } from "react";
import axiosClient from "./../../axios-client";

const HomeFirstSection = () => {
  const [firstSecSmBlg, setFirstSecSmBog] = useState([]);
  const [secondSecBog, setSecondSecBog] = useState([]);
  const [firstSlider, setFirstSlider] = useState([]);
  useEffect(() => {
    axiosClient.get("home/post/first/section/get").then(({ data }) => {
      setFirstSecSmBog(data.first_section);
      setSecondSecBog(data.second_section);
      setFirstSlider(data.slider_data);
      console.log(data.first_section);
    });
  }, []);

  return (
    <>
      <div className="firstsectionheigh">
        <div className="firstsection">
          <div className="left">
            <Topslider post={firstSlider} />

            <div className="topsectionSecondPart">
              {/* <BlogCard /> */}
              {firstSecSmBlg.map(
                (info, index) =>
                  index < 2 && <BlogCardSmall key={info.id} post={info} />
              )}
            </div>
          </div>
          <div className="category">
            <div className="topadd">
              <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
            </div>

            <BlogCardSmall left="0" post={firstSecSmBlg[2]} />
          </div>
        </div>
      </div>
      <div>
        <LargeBlogCardSection data={secondSecBog} />
      </div>
      <EposodeBlogCardSection />
      <SmallBlogCardSection />
      <LargeSmallCardSection />
    </>
  );
};

export default HomeFirstSection;
