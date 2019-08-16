import styled from 'styled-components';

export const StyledStage = styled.div`
  background: #111;
  border: 2px solid #333;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(${props => props.heigth}, 1fr);
  height: ${props => props.heigth * 1.5}rem;
  width: ${props => props.width * 1.5}rem;
`;
