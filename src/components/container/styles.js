import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
