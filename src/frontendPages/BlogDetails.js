import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import Container from "../components/frontend/Container";
import FontImg from "../images/headimg.jpg";
import BlogerSmallCard from "../components/frontend/BlogerSmallCard";
import BlogCardSmallWithoutImage from "../components/frontend/SmallCardWithOutImage";
import { BlogChildimage } from "../style/BlogDetails.Style";
import { useParams } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import {
  PageDivider,
  LeftPart,
  RightPart,
  HeadTitle,
  TopImageDiv,
  Cardtext,
  HeadDiv,
} from "../style/BlogDetails.Style";
import { useEffect, useState } from "react";
import axiosClient from "./../axios-client";
import { styled } from "styled-components";
const BlogDetails = () => {
  let { apiBaseUrl } = useStateContext();
  let [blogSection, setblogSection] = useState([]);
  let [bloggerInfo, setbloggerInfo] = useState({});
  let params = useParams();
  let [blogdetails, setBlogDetails] = useState([]);
  let [relatedBlog, setRelatedBlog] = useState([]);
  let [activeBlogId, setActiveBlogId] = useState(0);
  console.log(params.blogId);
  useEffect(() => {
    getDetails(params.blogId);
  }, []);
  const getDetails = async (id) => {
    setActiveBlogId(id);
    await axiosClient
      .get(`/single/blog/details?blog_id=${id}`)
      .then(({ data }) => {
        console.log(data);
        setBlogDetails(data.data);
        setblogSection(data.data.blogSection);
        setbloggerInfo(data.data.bloggerInfo);
        relatedPost(data.data.category_id);
      });
  };
  const silectedBlogdetails = (id) => {
    getDetails(id);
  };
  const relatedPost = async (categoryId) => {
    await axiosClient
      .get(`/single/related/blog?category_id=${categoryId}`)
      .then(({ data }) => {
        console.log(data);
        setRelatedBlog(data);
      });
  };
  return (
    <PageHeaderFooter>
      <Container>
        <HeadDiv>
          <HeadTitle>{blogdetails.title}</HeadTitle>
          <span>
            By{" "}
            <span>
              {blogdetails.bloggerInfo && blogdetails.bloggerInfo.name} .
            </span>
            Published in
            <span>
              {" "}
              {blogdetails.category_info && blogdetails.category_info.name}
            </span>{" "}
            {blogdetails.publish_time && blogdetails.publish_time}
            <span>. 2 min read </span>
          </span>
        </HeadDiv>
        <PageDivider>
          <LeftPart>
            <TopImageDiv>
              <img src={`${apiBaseUrl}${blogdetails.image}`} alt="" />
            </TopImageDiv>
            <Cardtext>
              {/* {blogdetails.post_details} */}
              <div
                dangerouslySetInnerHTML={{ __html: blogdetails.post_details }}
              />
              {blogSection.map((data) => (
                <div key={data.id}>
                  <BlogChildimage>
                    <img src={`${apiBaseUrl}${data.image}`} alt="" />
                  </BlogChildimage>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  />
                </div>
              ))}
            </Cardtext>
          </LeftPart>
          <RightPart>
            <BlogerSmallCard data={bloggerInfo} />
            {relatedBlog.map((data) => (
              <BlogCardSmallWithoutImage
                key={data.id}
                data={data}
                activeId={activeBlogId}
                selectBlog={silectedBlogdetails}
              />
            ))}
          </RightPart>
        </PageDivider>
      </Container>
    </PageHeaderFooter>
  );
};

export default BlogDetails;
