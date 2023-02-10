import styled from "styled-components";
export const EpisodeBlogNameStyle = styled.h3`
  font-size: 14px;
  margin-top: 5px;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const EpisodeBlogtitleStyle = styled.div`
  display: flex;
  font-size: 13px;
  color: black;
  line-height: 1.3;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const EpisodeImage = styled.div`
  flex-basis: 30%;
  padding-right: 10px;
  img {
    object-fit: cover;
    height: 60px;
    width: 60px;
    border-radius: 7px;
  }
`;
export const EpisodeTitle = styled.div`
  flex-basis: 70%;
`;
