import styled from "styled-components";
import img from "../../src/images/blogerbg.png";

export const Cardstyle = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  background-color: var(--theme-ui-colors-contentBg, #fff);
  border-radius: 1rem;
  transition: transform 250ms ease 0s, box-shadow 250ms ease 0s,
    color 250ms ease 0s;
  box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
  padding: 2rem;

  margin: 20px 14px;
`;

export const Roundimgdiv = styled.div`
  position: absolute;
  height: 30%;
  width: 35%;
  border-radius: 100%;
  left: 84px;
  top: 62px;
  overflow: hidden;
`;
export const Imagediv = styled.div`
  position: relative;
  background-image: url(${img});
  width: 100%;
  height: 113px;
  background-size: cover;
  background-position: center;
  opacity: 0.25;
`;
export const Bodydiv = styled.div`
  background: white;
  ul,
  h1,
  div {
    background: white;
  }
`;
export const Name = styled.h1`
  text-align: center;
  background: white;

  margin-top: 17px;
  font-size: 23px;
`;
export const Work = styled.h1`
  box-sizing: border-box;
  margin: 0px 0px 1rem;
  min-width: 0px;
  font-family: Inter, sans-serif;
  line-height: 1.33;
  display: block;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  color: var(--theme-ui-colors-omegaDark, #718096);
  text-align: center;
`;
export const Social = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  ul li {
    display: inline-block;
    padding: 8px 12px;
    font-size: 18px;
    border-radius: 100%;
    align-items: center;
    margin: 10px;
    background: #dddddd;
  }
  ul li:hover {
    background: blue;
    color: white;
    cursor: pointer;
  }
  ul li svg {
    line-height: 10px;
  }
`;
