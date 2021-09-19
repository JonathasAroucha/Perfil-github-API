import styled from "styled-components";

export const Section = styled.section`
  width: 600px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  border-bottom: 10px solid #2f80ed;
  margin-top: 05px;

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
