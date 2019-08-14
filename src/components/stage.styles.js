import styled from 'styled-components';

export const StyledStage = styled.div`
  background: #111;
  border: 2px solid #333;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(
    ${props => props.heigth},
    calc(25vw / ${props => props.width})
  );
  max-width: 25vw;
  width: 100%;
`;
