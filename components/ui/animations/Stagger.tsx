import React from 'react';
import { BaseAnimationProps } from './types';
import { MotionWrapper } from './MotionWrapper';

interface StaggerProps extends BaseAnimationProps {
    staggerDelay?: number;
}

export const Stagger: React.FC<StaggerProps> = ({
    children,
    staggerDelay = 0.1,
    className = "",
    ...props
}) => {
    const variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay
            }
        }
    };

    return (
        <MotionWrapper
            className={className}
            variants={variants}
            {...props}
        >
            {children}
        </MotionWrapper>
    );
};
