import styled from "styled-components";

export const ButtonsNavigation = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Button = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 05px;
  border: none;
  background: #2f80ed; 
  margin-left: 10px;
  color: #fff;
  position: relative;
  bottom: 450px;
  cursor: pointer;
`

export const Section = styled.section`
  width: 600px;
  height: 450px;
  padding: 0px 10px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 05px;
  border-bottom: 10px solid #2f80ed;
  margin-top: 15px;
  font-family: "Raleway", sans-serif;

  @media (max-width: 645px) {
    width: 400px;
  }

  @media (max-width: 445px) {
    width: 300px;
  }

  @media (max-width: 345px) {
    width: 240px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  border-radius: 05px;
  background: #2f80ed;
  color: #fff;
  margin: 10px 0px;
  width: 50%;
  height: 30px;
  margin-left: 25%;

  @media (max-width: 645px) {
    width: auto;
    margin-left: 0px;
  }
`;

export const ListOfFollowersContainer = styled.h1`
  height: 350px;
  width: auto;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 05px;
`;

export const Follower = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  h2 {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #434343;
    font-weight: 700;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
    color: #000000;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.1;
    font-weight: 700;

    @media (max-width: 445px) {
      height: auto;
      font-size: 12px;
    }
  }

  @media (max-width: 445px) {
    width: auto;
  }
`;

export const ProfileFollowers = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25%;
  width: auto;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #000000;

  @media (max-width: 645px) {
    width: auto;
    margin-left: 0px;
  }
`;
