import styled from "styled-components";
import { Link } from "react-router-dom";

export const H6 = styled.h6`
  color: #999;
  font-weight: 900;
  letter-spacing: 1px;
  font-size: 13px;
`;

export const Panel = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px 30px;
  height: 400px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  @media (max-width: 768px) {
    margin: 15px 15px !important;
  }
`;

export const Li = styled.li`
  display: inline-block;
  list-style: none;
  margin: 5px 30px;
  color: #999;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #555;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgb(0, 0, 0, 0.05);
  }
  &:focus {
    outline: none;
    background-color: rgb(0, 0, 0, 0.05);
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const A = styled(Link)`
  color: #999;
`;

export const Span = styled.span`
  color: #999;
  font-size: 12px;
  cursor: default;
  user-select: none;
`;

export const Main = styled.main`
  height: 288px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    height: 5px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #0058e4;
    transition: "all .2s ease-in-out";
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9fc4ff;
  }
`;

export const Expand = styled(Link)`
  padding: 20px;
  float: right;
  margin-right: 10px;
  color: #0058e4;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: inline-block;
  input {
    border: none;
    transition: all 0.2s ease-in-out;
    padding-right: 10px;
    color: #999;
    &:focus {
      outline: none;
    }
    @media (max-width: 373px) {
      width: 180px;
    }
    @media (max-width: 323px) {
      width: 140px;
    }
    @media (max-width: 293px) {
      width: 120px;
    }
    @media (max-width: 257px) {
      width: 100px;
    }
  }
  button {
    background-color: transparent;
    color: #0058e4;
    border: none;
    font-size: 18px;
  }
`;

export const Add = styled(Link)`
  background-color: transparent;
  font-size: 19px;
  float: right;
  color: #0058e4;
  padding: 0px 5px;
  &:hover {
    text-decoration: none;
  }
  i {
    padding: 6px;
    border-radius: 50px;
    transition: all 0.35s ease-in-out;
    &:active {
      background-color: #f4f4f4;
    }
  }
`;
