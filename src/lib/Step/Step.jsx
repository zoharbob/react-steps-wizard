import React from 'react';
import {
    StepItemContainer,
    IconContainer,
    Icon,
    IconError,
    Content,
    Title,
    Subtitle,
    StepContent,
    Mark,
    Step,
} from './Step.style';

const StepItem = ({
    children,
    title,
    activeIndex,
    iconSize = 'medium',
    subtitle,
    currentStep,
    icon,
    direction,
    hasError,
    mark
}) => {

    const renderIcon = () => {
        if(hasError && activeIndex === currentStep) {
            return (
                <IconError iconSize={iconSize} />
            )
        } else if(activeIndex > currentStep) {
            return <Icon iconSize={iconSize} />
        }
        return (
            <Step isActive={activeIndex === currentStep} iconSize={iconSize}>
                {currentStep}
            </Step>
        )
    }

    return (
        <StepItemContainer direction={direction}>
            <IconContainer>
                {renderIcon()}
                {mark && <Mark className="mark">{mark}</Mark>}
            </IconContainer>
            <Content isActive={activeIndex >= currentStep}>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                {children && (
                    <StepContent>
                        {children}
                    </StepContent>
                )}
            </Content>
        </StepItemContainer>
    )
};

export default StepItem;