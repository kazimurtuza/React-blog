import Container from "./../components/frontend/Container";
import { CardRow } from "../style/LargeCardList.style";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import {
  PageHeadDiv,
  PageHeadTitle,
  PageSubtitle,
} from "../style/PageHeadText.Style";

import BlogCard from "./../components/frontend/BlogCard";
import BlogerInfoCard from "../components/frontend/BlogerInfoCard";

const BlogerBlogList = () => {
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
        <BlogerInfoCard />
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
export default BlogerBlogList;
