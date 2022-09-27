import styled from "styled-components";
import BackgroundImg from "../../src/images/blogerbg.png";

export const BlogerCard = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: var(--theme-ui-colors-contentBg, #fff);
  border-radius: 1rem;
  -webkit-transition: -webkit-transform 250ms ease, box-shadow 250ms ease,
    color 250ms ease;
  -webkit-transition: transform 250ms ease, box-shadow 250ms ease,
    color 250ms ease;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  padding: 2rem;
  position: relative;
  margin: 1rem;
`;

export const BgImageContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: 11rem;
  position: absolute;
  opacity: 0.05;
  top: 0;
  left: 0;
  border-radius: 1rem;
`;
export const BgImageShadow = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background: linear-gradient(
    270deg,
    var(--theme-ui-colors-contentBg, #fff) 20%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const DetailsContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  z-index: 3;

  display: grid;
  grid-template-columns: 2fr 5fr;
  background: #ff000000;
  div {
    background: #ff000000;
  }
  margin: 1rem;
`;
export const MainLeft = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-flex-basis: 33.333333%;
  -ms-flex-preferred-size: 33.333333%;
  flex-basis: 33.333333%;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 62%;
    width: 41%;
    border-radius: 64%;
  }
`;
export const MainRight = styled.div`
  box-sizing: border-box;
  display: block;
  margin: 0;
  min-width: 0;
  -webkit-flex-basis: 66.666667%;
  -ms-flex-preferred-size: 66.666667%;
`;

export const BlogerNamge = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 1.33;
  display: block;
  color: #667eea;
  font-weight: bold;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;
export const BlogerTitle = styled.h1`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 1.33;
  display: block;
  color: var(--theme-ui-colors-heading, #2d3748);
  font-weight: 600;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--theme-ui-colors-omegaDark, #718096);
`;
export const BlogerInfoCotainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 4fr 2fr 2fr;
`;
export const BlogerContent = styled.div``;
export const BlogerContentFirst = styled.div``;
export const BlogerContentTxt = styled.div``;
export const IconList = styled.div`
  margin-top: -6px;
  margin-bottom: 6px;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  display: grid;
  grid-template-columns: 1fr 4fr;
  svg {
    font-size: 17px;
    margin: 0px 5px;
    margin-top: 6px;
  }
  span svg {
    font-size: 21px;
    margin: -6px 3px;
    margin-top: 6px;
    color: blue;
  }
`;
