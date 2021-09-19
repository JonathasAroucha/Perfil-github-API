import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

export const Name = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #2f80ed;
  margin: 0;
  font-family: "Raleway", sans-serif;
`;

export const Username = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  color: #000000;
  margin: 0;
  padding: 5px;
  font-family: "Raleway", sans-serif;
`;

export const Description = styled.p`
  width: 450px;
  height: 100px;
  padding: 05px;
  color: #e5e5e5;
  font-size: 12px;
  font-weight: 500;
  text-align: justify;
  background: #434343;
  line-height: 1.1;
  font-family: "Raleway", sans-serif;
  border-radius: 05px;

  @media (max-width: 620px) {
    width: 350px;
  }

  @media (max-width: 420px) {
    width: 250px;
  }

  @media (max-width: 320px) {
    width: auto;
    margin: 5px;
  }
`;
