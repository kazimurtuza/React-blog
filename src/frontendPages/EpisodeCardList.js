import Container from "../components/frontend/Container";
import { EpisodeCardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import EpisodeCard from "./../components/frontend/EpisodCard";
import { useEffect, useState } from "react";
import axiosClient from "./../axios-client";
const EpisodeCardList = () => {
  const [episodeList, setepisodeList] = useState([]);
  useEffect(() => {
    axiosClient
      .get("post/episode/blog")
      .then(({ data }) => setepisodeList(data));
  }, []);
  return (
    <PageHeaderFooter>
      <Container>
        <PageHeadDiv>
          <PageHeadTitle>Episode Blog</PageHeadTitle>
          <PageSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </PageSubtitle>
        </PageHeadDiv>
        <EpisodeCardRow>
          {episodeList.map((data) => (
            <EpisodeCard key={data.id} data={data} />
          ))}
        </EpisodeCardRow>
      </Container>
    </PageHeaderFooter>
  );
};
export default EpisodeCardList;
