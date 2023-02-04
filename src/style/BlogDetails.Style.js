import styled from "styled-components";

export const PageDivider = styled.div`
  display: grid;
  grid-template-columns: 8fr 3fr;
  margin-top: 20px;
`;

export const LeftPart = styled.div`
  padding: 11px;
  margin: 7px;

  margin-top: -2px;
  padding: 20px;
  margin: 0px 7px;
  margin-top: -5px;

  img {
    width: 100%;
  }
`;
export const RightPart = styled.div``;
export const HeadDiv = styled.div`
  margin: 10px;
  margin: 0px 30px;
`;
export const HeadTitle = styled.h1`
  font-size: 1.9rem;
  margin-bottom: 8px;
  font-weight: bold;
  color: #2d3748;
  font-weight: 900;
`;
export const TopImageDiv = styled.div`
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  /* padding: 11px; */
  margin: 7px;
  height: 355px;
`;
export const Cardtext = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap");

  text-align: justify;
  font-family: "Karla", sans-serif !important;
  color: red;
  font-weight: normal;
  line-height: 1.8;
  margin: 8px;
  color: var(--theme-ui-colors-article, #4a5568);
  font-size: 1.25rem;
  background: white;
  padding: 0px 13px;
  transition: transform 250ms ease 0s, box-shadow 250ms ease 0s,
    color 250ms ease 0s;
  box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
  margin-top: -6px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const BlogChildimage = styled.div`
  margin: auto;
  border-radius: 18px;

  height: 361px;
  overflow: hidden;
`;
