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
  const [firstSlider, setFirstSlider] = useState([]);
  const [secondSecBog, setSecondSecBog] = useState([]);
  const [episodelist, setEpisode] = useState([]);

  const [fifthSection, setfifthSection] = useState([]);
  const [sixthSection, setsixthSection] = useState([]);
  useEffect(() => {
    axiosClient.get("home/post/first/section/get").then(({ data }) => {
      setFirstSecSmBog(data.first_section);
      setFirstSlider(data.slider_data);
    });

    axiosClient.get("home/post/second/section/get").then(({ data }) => {
      setSecondSecBog(data);
    });

    axiosClient.get("home/post/fourth/section/get").then(({ data }) => {
      setEpisode(data);
    });

    axiosClient.get("home/post/fifth/section/get").then(({ data }) => {
      setfifthSection(data);
    });
    axiosClient.get("home/post/sixth/section/get").then(({ data }) => {
      setsixthSection(data);
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
      <EposodeBlogCardSection data={episodelist} />
      <SmallBlogCardSection data={fifthSection} />
      <LargeSmallCardSection data={sixthSection} />
    </>
  );
};

export default HomeFirstSection;
