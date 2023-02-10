import styled from "styled-components";

export const BlogCard = styled.div`
  cursor: pointer;
  background-color: var(--theme-ui-colors-contentBg, #fff);
  border-radius: 1rem;
  -webkit-transition: -webkit-transform 250ms ease, box-shadow 250ms ease,
    color 250ms ease;
  -webkit-transition: transform 250ms ease, box-shadow 250ms ease,
    color 250ms ease;
  transition: transform 250ms ease, box-shadow 250ms ease, color 250ms ease;
  box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
  padding: 2px 7px;
  padding: 2px;
  margin: 10px;

  border-left-style: solid;
  border-left-width: 5px;
  border-left-color: #e0edfd;
  &:hover {
    background: #fafafa;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
      rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    span {
      color: var(--theme-ui-colors-alpha, #667eea);
    }
  }
`;

export const Cardbody = styled.div`
  background: inherit;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  line-height: 1.33;
  display: block;
  color: var(--theme-ui-colors-heading, #2d3748);
  font-weight: bold;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin-bottom: 1rem;
  display: block;
  color: var(--theme-ui-colors-heading, #2d3748);
  font-weight: 600;
  -webkit-text-decoration: none;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  /* padding: 3px 6px; */
  margin: 10px;
  span {
    cursor: pointer;
  }
  span:hover {
    color: blue;
  }
  /* &::before {
    content: "";
    height: 98%;
    width: 10px;
    background: var(--theme-ui-colors-alphaLight, #a3bffa);
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: -17px;
    border-radius: 10px 0px 0px 10px;
  } */
`;

export const ImageTitleDiv = styled.div`
  display: flex;
`;
export const ImageDiv = styled.div`
  flex-basis: 40%;
  padding-right: 4px;
  img {
    width: 90%;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const TitleDiv = styled.div`
  background: inherit;
  flex-basis: 60%;
  span: {
    font-size: 12px;
    background: inherit;
  }
`;

export const Cardfooter = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  background: inherit;
`;
export const Name = styled.span`
  color: var(--theme-ui-colors-alpha, #667eea);
  font-weight: bold;
  font-size: 13px;
  background: inherit;
`;
export const Date = styled.span`
  font-size: 13px;
  background: inherit;
  color: var(--theme-ui-colors-omega, #a0aec0);
`;
