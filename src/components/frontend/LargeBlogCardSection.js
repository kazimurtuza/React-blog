import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";
import Sectionhead from "../element/SectionHead";
import "../../style/LargeBlogCardSection.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../../axios-client";
const LargeBlogCardSection = (props) => {
  const navigate = useNavigate();
  const dataList = props.data ? props.data : [];
  const [secondSecBog, setSecondSecBog] = useState(dataList);

  const showAllData = () => {
    navigate("/blog-list/recent");
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
          <BlogCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};
export default LargeBlogCardSection;
