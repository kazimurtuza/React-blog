import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import Container from "../components/frontend/Container";
import FontImg from "../images/headimg.jpg";
import BlogerSmallCard from "../components/frontend/BlogerSmallCard";
import BlogCardSmallWithoutImage from "../components/frontend/SmallCardWithOutImage";
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
  BlogChildimage,
} from "../style/BlogDetails.Style";
import EpisodeItemListCard from "../components/frontend/EpisodeItemListCard";
import { useEffect } from "react";
import axiosClient from "./../axios-client";
import { useState } from "react";

const EpisodeBlogDetails = () => {
  let { apiBaseUrl } = useStateContext();
  let [episode, setEpisode] = useState([]);
  let [blogsection, setblogSection] = useState([]);
  let [episodeList, setepisodeList] = useState([]);
  let [relatedBlog, setRelatedBlog] = useState([]);
  let [activeBlogId, setActiveBlogId] = useState(0);
  let param = useParams();
  useEffect(() => {
    getDetails(param.episode_id);
    if (param.child_episode_id !== 0) {
      getDetails(param.child_episode_id, 0);
    }
  }, []);
  const relatedPost = async (categoryId) => {
    await axiosClient
      .get(`/episode/related/blog?category_id=${categoryId}`)
      .then(({ data }) => {
        setRelatedBlog(data);
      });
  };
  const getDetails = (id, ep = 1) => {
    setActiveBlogId(id);
    axiosClient
      .get(`/episode/blog/details?episode_id=${id}`)
      .then(({ data }) => {
        console.log(data.data);
        setEpisode(data.data);
        setblogSection(data.data.blogSection);
        ep && setepisodeList(data.data.episode_list);
        relatedPost(data.data.category_id);
      });
  };
  const silectedBlogdetails = (id) => {
    getDetails(id, 0);
  };
  const selectedBlog = (id) => {
    getDetails(id);
  };
  return (
    <PageHeaderFooter>
      <Container>
        <HeadDiv>
          <HeadTitle>{episode.title}</HeadTitle>
          <span>
            By <span>{episode.bloggerInfo && episode.bloggerInfo.name} .</span>{" "}
            Published in{" "}
            <span>{episode.category_info && episode.category_info.name} .</span>{" "}
            {episode.publish_time} <span>. 2 min read</span>
          </span>
        </HeadDiv>
        <PageDivider>
          <LeftPart>
            <TopImageDiv>
              <img src={`${apiBaseUrl}${episode.image}`} alt="" />
            </TopImageDiv>
            <Cardtext>
              <div dangerouslySetInnerHTML={{ __html: episode.post_details }} />

              {blogsection.map((data) => (
                <div key={data.id}>
                  <BlogChildimage>
                    <img src={`${apiBaseUrl}${data.image}`} alt="" />
                  </BlogChildimage>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.post_details,
                    }}
                  />
                </div>
              ))}
            </Cardtext>
          </LeftPart>
          <RightPart>
            <EpisodeItemListCard
              data={episodeList}
              selectBlog={silectedBlogdetails}
            />
            <br />
            {relatedBlog.map((data) => (
              <BlogCardSmallWithoutImage
                key={data.id}
                data={data}
                activeId={activeBlogId}
                selectBlog={selectedBlog}
              />
            ))}
          </RightPart>
        </PageDivider>
      </Container>
    </PageHeaderFooter>
  );
};

export default EpisodeBlogDetails;
