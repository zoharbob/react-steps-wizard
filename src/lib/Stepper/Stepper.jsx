import React from 'react';
import { StepperContainer, SpacerContainer, Spacer } from './Stepper.style';

const Stepper = ({ children, activeIndex = 0, iconSize, direction = 'horizontal', hasError, empLines = true }) => {

    return (
        <StepperContainer direction={direction}>
            {React.Children.toArray(children).map((child, i, arr) => (
                <React.Fragment key={i + child.props.title}>
                    {i > 0 && i < arr.length && (
                        <SpacerContainer direction={direction}>
                            <Spacer
                                direction={direction}
                                {...(empLines && {isPassed: activeIndex >= i})}
                            />
                        </SpacerContainer>
                    )}
                    {React.cloneElement(child, {activeIndex, currentStep: i, iconSize, direction, hasError})}
                </React.Fragment>
            ))}
        </StepperContainer>
    )
};

export default Stepper;
