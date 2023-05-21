import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  padding-top: 8px;
  margin-bottom: 32px;
`;

export const LinktoTweets = styled(Link)`
  display: block;
  font-size: 18px;
  line-height: 1.222;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  width: 196px;

  padding: 14px 0;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  text-transform: uppercase;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:hover {
    background: #5cd3a8;
  }
`;
