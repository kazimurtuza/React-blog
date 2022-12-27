import PageHeaderFooter from "../components/frontend/PageHeaderFooter";
import Container from "../components/frontend/Container";
import FontImg from "../images/headimg.jpg";
import BlogerSmallCard from "../components/frontend/BlogerSmallCard";
import BlogCardSmallWithoutImage from "../components/frontend/SmallCardWithOutImage";

import {
  PageDivider,
  LeftPart,
  RightPart,
  HeadTitle,
  TopImageDiv,
  Cardtext,
  HeadDiv,
} from "../style/BlogDetails.Style";
import EpisodeItemListCard from "../components/frontend/EpisodeItemListCard";
const EpisodeBlogDetails = () => {
  return (
    <PageHeaderFooter>
      <Container>
        <HeadDiv>
          <HeadTitle>
            Episode Markdown Language Sample Blog Post Styling
          </HeadTitle>
          <span>
            By <span>Sohag .</span> Published in <span>Travel .</span> May 15,
            2021 <span>. 2 min read</span>
          </span>
        </HeadDiv>
        <PageDivider>
          <LeftPart>
            <TopImageDiv>
              <img src={FontImg} alt="" />
            </TopImageDiv>
            <Cardtext>
              Markdown is a lightweight markup language with
              plain-text-formatting syntax. Its design allows it to be converted
              to many output formats, but the original tool by the same name
              only supports HTML. Markdown is often used to format readme files,
              for writing messages in online discussion forums, and to create
              rich text using a plain text editor.
            </Cardtext>
          </LeftPart>
          <RightPart>
            <EpisodeItemListCard />
            <br />

            {/* <BlogerSmallCard /> */}

            <BlogCardSmallWithoutImage />
            <BlogCardSmallWithoutImage />
            <BlogCardSmallWithoutImage />
            <BlogCardSmallWithoutImage />
            <BlogCardSmallWithoutImage />
          </RightPart>
        </PageDivider>
      </Container>
    </PageHeaderFooter>
  );
};

export default EpisodeBlogDetails;
