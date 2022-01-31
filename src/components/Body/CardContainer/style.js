import styled from 'styled-components';

export const CardContainerLayout = styled.div`
  text-align: center;
  align-content: center;
  margin: 0 auto;
  height: 80%;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media (max-width: 624px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 80px;
    margin-bottom: 50px;
  }
`;
