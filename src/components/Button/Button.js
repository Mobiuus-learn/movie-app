import styled from "styled-components";

export const Button = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  background-color: rgba(255,255,255, 0.05);
  color: #fff;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255, 0.1);

  &:hover {
    /* border-radius:5px; */
    /* transform: translateY(-2px); */
    transition: 0.3s ease-in-out;
    background-color:rgba(255,255,255, .2);
    border: 1px solid rgba(255,255,255, .1);
  }
`;
