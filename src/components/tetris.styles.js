import styled from 'styled-components';
import bgImg from '../assets/bg.png';

export const StyledTetrisWrapper = styled.div`
  background: url(${bgImg}) #000;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 10px;

  aside {
    display: block;
    padding: 0 20px;
    width: 200px;
  }
`;
