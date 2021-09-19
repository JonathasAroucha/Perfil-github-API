import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 420px) {
    width: auto;
    height: 100px;
  }

  @media (max-width: 320px) {
  }
`;
export const NumberContainer = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  h1 {
    font-size: 20px;
    text-align: center;
    color: #2f80ed;
    margin: 0;
  }

  h2 {
    font-size: 12px;
    text-align: center;
    color: #434343;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.1);
    transition: 0.4s ease;
    border-radius: 05px;
  }
`;
