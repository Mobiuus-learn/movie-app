import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-color:#60AFFF;
  z-index:1;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-right: 10px;
  padding: 8px 16px;
  cursor:pointer;
  border:none;
  background-color: #3066BE;
  color:#fff;
   border-radius: 20px;

  &:hover{
    border-radius:5px;
    /* transform: translateY(-2px); */
    transition:.3s ease-in-out;
    background-color: #3066dc;
  }
`;

export const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius:20px;
  border:none;
  outline:none;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100vw;
  flex: 0 0 10%;

  img {
    /* width:20%; */
    /* border-radius: 20px; */
  }
`;
export const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const MovieItem = styled.div`
  /* flex: ; */
  padding: 10px 10px;
  background-color: #fff;
  /* width: 32%; */
  /* height:auto; */
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:10px;

  img{
    border-radius:10px;
  }

  h3{
    line-height: .8em;
  }
`;
