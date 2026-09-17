import React from 'react';
import { BaseAnimationProps } from './types';
import { MotionWrapper } from './MotionWrapper';

interface ScaleInProps extends BaseAnimationProps {
    scale?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
    children,
    scale = 0.9,
    duration = 0.5,
    delay = 0,
    className = "",
    ...props
}) => {
    const variants = {
        hidden: { opacity: 0, scale },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: "easeOut"
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
