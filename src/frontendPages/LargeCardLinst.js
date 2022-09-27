import Container from "./../components/frontend/Container";
import { CardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import BlogCard from "./../components/frontend/BlogCard";
const LargeCardList = () => {
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
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </CardRow>
      </Container>
    </PageHeaderFooter>
  );
};
export default LargeCardList;
