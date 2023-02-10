import styled from "styled-components";
export const EposodeStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  font-family: "Inter", sans-serif;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
  border-radius: 15px 15px 15px 15px;
  margin: 1rem;
  height: 248px;
  overflow: hidden;
  background: white;

  img {
    width: 100%;

    height: 134px;

    border-radius: 15px 15px 15px 15px;
  }
`;
// export const EpisodeLeft = styled.div``;
export const EpisodeRight = styled.div`
  border-radius: 15px 15px 15px 15px;
  color: red;
  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    /* background: #555; */
    background: blue;
  }
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  ul li {
    display: flex;
    color: red;
    list-style: none;
    line-height: 24px;
    padding: 10px;
    gap: 7px;
    background: #ff000000;
    span {
      width: 49px;
      height: 27px;
      line-height: 29px;
      /* padding: 5px 14px; */
      border-radius: 100%;
      background: #888;
      color: white;
      text-align: center;
      font-size: 10px;
      font-weight: 600;
    }
  }
`;

export const EpisodeLeft = styled.div`
  padding-right: 13px;
`;

export const EposodeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
