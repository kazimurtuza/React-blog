import Container from "./../components/frontend/Container";
import { CardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import BlogCard from "./../components/frontend/BlogCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "./../axios-client";
const LargeCardList = () => {
  let paramData = useParams();
  let [blogList, setblogList] = useState([]);

  useEffect(() => {
    paramData.categoryOrType === "recent" &&
      axiosClient
        .get("post/recent/blog")
        .then(({ data }) => setblogList(data.data));
    console.log(blogList);
  }, []);

  return (
    <PageHeaderFooter>
      <Container>
        <PageHeadDiv>
          <PageHeadTitle>Case Studies</PageHeadTitle>
          <PageSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </PageSubtitle>
        </PageHeadDiv>
        <CardRow>
          {blogList.map((data, index) => (
            <BlogCard key={index} data={data} />
          ))}
        </CardRow>
      </Container>
    </PageHeaderFooter>
  );
};
export default LargeCardList;
