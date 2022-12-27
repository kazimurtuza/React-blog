import styled from "styled-components";
export const EpisodeListCard = styled.div`
  position: relative;
  background: white;
  border-radius: 15px;
  min-height: 200px;
  max-height: 400px;
  overflow: hidden;
  box-shadow: rgb(1 1 1 / 5%) 1px 1px 5px 0px;
  padding: 7px 7px;

  margin: 0px 10px;
  margin-top: 18px;
`;
export const EpisodeListCardWroper = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
    border: 1px solid #d5d5d5;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background: #eeeeee;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: #d5d5d5;
  }
  max-height: 350px;
`;
export const EpisodeListCardUl = styled.ul`
  li {
    padding: 4px 4px;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 8fr;
    cursor: pointer;
    span:hover {
      color: #8a8ae7;
    }

    span {
      padding: 5.3px 3px;
    }
  }
`;
export const ItemNumber = styled.div`
  border-radius: 100%;
  border: 1.4px solid #a0aec0;
  background: #e9e8e8;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  height: 23px;
  width: 23px;
  align-items: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  align-items: center;
  margin-top: 7px;
`;
export const EpisodeListTitle = styled.h3`
  text-align: center;
  background: white;
  align-items: center;
  width: 100%;
  span {
    padding: 3px 8px;
    font-size: 14px;
    background: #f1f1f1;
    position: relative;
    left: 82px;
    top: -23px;
  }
`;
export const EpisodeListTitlebottom = styled.h3`
  position: absolute;
  bottom: 0px;
  height: 15px;
  width: 100%;
  background: white;
`;
