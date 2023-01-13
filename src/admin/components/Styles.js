import styled from "styled-components";
import { v } from "../style/variables";
export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  position: relative;
  width: 100%;
  padding: calc(${v.smSpacing}*2);
  h1 {
    font-size: 14px;
  }
`;

export const Stopbar = styled.div`
  width: 100%;
  background: #bcbbcc;
  padding: 5px 33px;
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: right;
`;
export const Smaincontent = styled.div`
  margin-top: 60px;
`;
