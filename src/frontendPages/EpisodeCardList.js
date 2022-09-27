import Container from "../components/frontend/Container";
import { EpisodeCardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import EpisodeCard from "./../components/frontend/EpisodCard";
const EpisodeCardList = () => {
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
        <EpisodeCardRow>
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
        </EpisodeCardRow>
      </Container>
    </PageHeaderFooter>
  );
};
export default EpisodeCardList;
