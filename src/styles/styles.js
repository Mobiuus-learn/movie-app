import styled, { css } from "styled-components";
const mediaQuery = {
  mobile: `(max-width: 768px)`,
};
export const AppContainer = styled.div`
  text-align: center;
  background-color: #30353c;
  color: #fff;
  z-index: 1;
  border-radius: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  
  /* align-items: center; */
  /* gap: 20px; */

  /* min-width:80vw; */

  /* margin-left:5%; */

  ${(props) =>
    props.isMobile &&
    css`
      @media ${mediaQuery.mobile} {
        height: 5%;
        width: 80vw;
        position: relative;
        left: 8%;
        /* background-color: blue; */
      }
    `}
`;

export const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid transparent;
  outline: none;
  background-color: #5d5d5d;
  color: #fff;

  &:focus {
    border: 1px solid #7562f8;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100vw;
  flex: 1 0 10vw;

  img {
    /* width:20%; */
    /* border-radius: 20px; */
  }
`;

export const MovieItem = styled.div`
  /* flex: ; */
  padding: 10px 10px;
  background-color: #43515c;
  /* width: 32%; */
  /* height:auto; */
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  color: #fff;
  flex: 1 0 10vw;
  border: 1px solid #7862f8;

  cursor: pointer;

  img {
    border-radius: 10px;
  }

  h3 {
    line-height: 1.2em;
  }
`;
