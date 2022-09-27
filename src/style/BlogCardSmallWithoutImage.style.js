import styled from "styled-components";

export const BlogCard = styled.div`
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
`;

export const Cardbody = styled.div`
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
  padding: 3px 6px;
  margin: 10px;
  background: white;
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

export const Cardfooter = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  background: white;
`;
export const Name = styled.span`
  color: var(--theme-ui-colors-alpha, #667eea);
  font-weight: bold;
  font-size: 13px;
`;
export const Date = styled.span`
  font-size: 13px;
  color: var(--theme-ui-colors-omega, #a0aec0);
`;
