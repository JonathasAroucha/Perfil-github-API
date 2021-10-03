import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 600px;
  height: 130px;
  background: #000000; 
  background: -webkit-linear-gradient( to top, #434343, #000000); 
  background: linear-gradient( to top, #434343, #000000); 
  border-radius: 05px;
  border-top: 1px solid #2f80ed;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (max-width: 620px) {
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }

  @media (max-width: 320px) {
    width: 240px;
  }
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  padding: 15px 0;
  color: #e5e5e5;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  font-family: "Raleway", sans-serif;
`;

export const HeaderInputContainer = styled.div`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 05px;
  border: none;
  padding: 0 16px;
  color: #000000;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  transition: 0.4s ease;

  &:focus {
    outline: none;
    width: 220px;
    transition: 0.4s ease;
  }

  @media (max-width: 320px) {
    width: auto;
  }
`;

export const HeaderSearchButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 05px;
  border: none;
  background: #2f80ed; 
  background: -webkit-linear-gradient( to top, #1cb5e0, #2f80ed); 
  background: linear-gradient( to top,#1cb5e0, #2f80ed); 
  margin-left: 05px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 1s;

  span {
    font-size: 20px;
  }

  &:hover {
    background: #2f80ed; 
    background: -webkit-linear-gradient( to top, #1fd5e0, #2f80ed); 
    background: linear-gradient( to top, #1fd5e0, #2f80ed); 
    transform: scale(1.05);
    transition: all 1s;
    cursor: pointer;
  }

  @media (max-width: 320px) {
    width: auto;
  }
`;

export const MsgDeErro = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: #fff;
  margin-top:-7px
`
