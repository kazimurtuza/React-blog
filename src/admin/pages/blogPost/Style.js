import styled from "styled-components";
import { v } from "../../style/variables";

export const BPCard = styled.div`
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: ${v.lgSpacing};
  width: 100%;
`;
export const BPleft = styled.div`
  flex-basis: 65%;
  border-right: 1px solid #dadada;
  padding: ${v.xlSpacing};
`;
export const BPright = styled.div`
  flex-basis: 35%;
  padding: ${v.xlSpacing};
`;
export const ImageUploadDiv = styled.div`
  width: 100%;
  height: 242px;
  margin: auto;
  border-radius: 10px;
  padding: 32px;
  background: #dcdcdc;
  padding: ${v.xlSpacing};
  margin-bottom: 10px;
`;

export const DeleteItem = styled.span`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 7px;
  border-radius: 50%;
  background: red;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  justify-items: center;
  line-height: 3px;
  font-size: 13px;
  color: white;
  line-height: 14px;
  font-weight: bold;
  top: 9px;
  right: 0px;
  cursor: pointer;
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  position: absolute;
`;
export const ItemContetDiv = styled.div`
  position: relative;
  margin-top: 19px;
`;
