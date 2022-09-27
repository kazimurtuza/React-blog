import Container from "./../components/frontend/Container";
import { CardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import BlogCardSmall from "../components/frontend/BlogcardSmall";
const SmallCardList = () => {
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
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
          <BlogCardSmall />
        </CardRow>
      </Container>
    </PageHeaderFooter>
  );
};
export default SmallCardList;
