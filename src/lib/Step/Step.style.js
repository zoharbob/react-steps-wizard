import styled from "styled-components";
import {ReactComponent as CheckIcon} from "../assets/check-circle-solid.svg";
import {ReactComponent as ErrorIcon} from "../assets/times-circle-solid.svg";

const iconSizes = {
    small: {width: '16px', height: '16px'},
    medium: {width: '24px', height: '24px'},
    large: {width: '32px', height: '32px'},
}

export const Icon = styled(CheckIcon)`
  color: dodgerblue;
  width: ${({ iconSize }) => iconSizes[iconSize]?.width || iconSizes.medium.width} ;
  height: ${({ iconSize }) => iconSizes[iconSize]?.height || iconSizes.medium.height};
`;

export const IconError = styled(ErrorIcon)`
  color: #dc3333;
  width: ${({ iconSize }) => iconSizes[iconSize]?.width || iconSizes.medium.width} ;
  height: ${({ iconSize }) => iconSizes[iconSize]?.height || iconSizes.medium.height};
`;

export const StepItemContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: ${({ direction }) => direction === 'horizontal' ? 'center' : 'flex-start'};
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ isActive }) => isActive ? 'black' : 'lightgrey'}
`;

export const Title = styled.div`
  font-size: 20px;
  position:relative;
`;

export const Subtitle = styled.div`
  font-size: 15px;
`;

export const Step = styled.div`
  background-color: ${({ isActive }) => isActive ? 'dodgerblue' : 'lightgrey'};
  width: ${({ iconSize }) => iconSizes[iconSize]?.width || iconSizes.medium.width} ;
  height: ${({ iconSize }) => iconSizes[iconSize]?.height || iconSizes.medium.height};
  border-radius: 20px;
  text-align: center;
  line-height: ${({ iconSize }) => iconSizes[iconSize]?.height || iconSizes.medium.height};
  color: ${({ isActive }) => isActive ? 'white' : 'grey'};
  margin-bottom: 3px;
  font-weight: ${({ isActive }) => isActive ? 'bold' : 'normal'};
  font-size: calc(${({ iconSize }) => (iconSizes[iconSize]?.width || iconSizes.medium.width)} - 8px);
`;

export const StepContent = styled.div`
  padding: 10px 0;
`;

export const Mark = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  font-size: 20px;
`;