import styled, {css} from "styled-components";

export const StepperContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === 'horizontal' ? 'row' : 'column'};
`

export const Spacer = styled.div`
  ${({ direction }) => direction === 'horizontal' ? css`
    border-top-style: solid;    
  ` : css`
    border-left: solid;
    margin-left: 25px;
  `};
  border-width: ${({ isPassed }) => isPassed ? '2px' : '1px'};
  border-color: ${({ isPassed }) => isPassed ? 'dodgerblue' : '#0000002b'};
  min-height: ${({ direction }) => direction === 'horizontal' ? '1px' : '50px'};
  width: ${({ direction }) => direction === 'horizontal' ? '100%' : '1px'};
`;

export const SpacerContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
