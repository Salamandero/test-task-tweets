import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  text-align: center;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const BackLink = styled(Link)`
  font-weight: 500;
  display: inline-block;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  padding: 4px;
  background-color: #ad00b5;
  padding-left: 8px;
  padding-right: 8px;
`;
