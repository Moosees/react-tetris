import styled from 'styled-components';

export const StyledDisplay = styled.div`
  align-items: center;
  background: #000;
  border: 4px solid #333;
  border-radius: 20px;
  box-sizing: border-box;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  display: flex;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  margin: 0 0 20px 0;
  min-heigth: 30px;
  padding: 20px;
  width: 100%;
`;
