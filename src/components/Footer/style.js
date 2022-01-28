import styled from 'styled-components';

export const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: #eeeeee;
  color: black;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dddddd;
  @media (max-width: 624px) {
    margin-top: 80px;
  }
`;
