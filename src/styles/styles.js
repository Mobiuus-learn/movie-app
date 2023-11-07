import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-color:#353535;
  color:#fff;
;
  z-index:1;
  border-radius: 20px
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  margin-top:20px;
  

`;

export const ButtonContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  `;


export const SearchInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border-radius:20px;
  border:1px solid rgba(255,255,255, .1);
  outline:none;
  background-color: #5d5d5d;
  color: #fff;

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
  background-color: #0f0f0f;
  /* width: 32%; */
  /* height:auto; */
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius:10px;
  color: #fff;
  flex: 1 0 10vw;


  img{
    border-radius:10px;
  }

  h3{
    line-height: 1.2em;
  }
`;
