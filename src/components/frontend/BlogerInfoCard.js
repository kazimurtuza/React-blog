import BlogerPhoto from "../../images/men.jpg";
import {
  BlogerImage,
  BlogerDetails,
  BlogerExpert,
  BlogerSocial,
  BlogerCard,
  BgImageContainer,
  BgImageShadow,
  DetailsContainer,
  MainLeft,
  MainRight,
  BlogerNamge,
  BlogerTitle,
  BlogerInfoCotainer,
  BlogerContent,
  BlogerContentTxt,
  IconList,
  BlogerContentFirst,
} from "../../style/BlogerDetails.style";

import { AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const BlogerInfoCard = () => {
  return (
    <BlogerCard>
      <DetailsContainer>
        <MainLeft>
          <img src={BlogerPhoto} alt="" />
        </MainLeft>
        <MainRight>
          <BlogerNamge>Kazi Murtuza</BlogerNamge>
          <BlogerInfoCotainer>
            <BlogerContentFirst>
              <BlogerTitle>Creative Designer</BlogerTitle>
              <BlogerContentTxt>
                Sed commodo, est quis maximus fermentum, massa ipsum euismod
                neque, in varius risus tellus quis lacus. Sed ac bibendum odio.
              </BlogerContentTxt>
            </BlogerContentFirst>
            <BlogerContent>
              <BlogerTitle>Expertise</BlogerTitle>
              <BlogerContentTxt>
                Advertising fermen
                <br />
                Business <br />
                Designer <br />
              </BlogerContentTxt>
            </BlogerContent>
            <BlogerContent>
              <BlogerTitle>Social Media</BlogerTitle>
              <BlogerContentTxt>
                <IconList>
                  <span>
                    <AiFillTwitterCircle />
                  </span>

                  <span>twitter</span>
                </IconList>
                <IconList>
                  <BsFacebook />
                  <span>Facebook</span>
                </IconList>
                <IconList>
                  <BsInstagram />
                  <span>Instagram</span>
                </IconList>
              </BlogerContentTxt>
            </BlogerContent>
          </BlogerInfoCotainer>
        </MainRight>
      </DetailsContainer>
      <BgImageContainer></BgImageContainer>
      <BgImageShadow></BgImageShadow>
    </BlogerCard>
  );
};

export default BlogerInfoCard;
