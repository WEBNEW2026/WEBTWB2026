import React from 'react';
import { BaseAnimationProps, AnimationDirection } from './types';
import { MotionWrapper } from './MotionWrapper';

interface FadeInProps extends BaseAnimationProps {
    direction?: AnimationDirection;
    distance?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    direction = 'up',
    distance = 40,
    duration = 0.6,
    delay = 0,
    className = "",
    ...props
}) => {
    const getInitial = () => {
        switch (direction) {
            case 'up': return { opacity: 0, y: distance };
            case 'down': return { opacity: 0, y: -distance };
            case 'left': return { opacity: 0, x: distance };
            case 'right': return { opacity: 0, x: -distance };
            default: return { opacity: 0 };
        }
    };

    const variants = {
        hidden: getInitial(),
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad-ish
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
