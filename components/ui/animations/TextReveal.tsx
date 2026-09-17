import React from 'react';
import { BaseAnimationProps } from './types';
import { MotionWrapper } from './MotionWrapper';
import { motion } from 'framer-motion';

interface TextRevealProps extends BaseAnimationProps {
    text?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
    children,
    text,
    className = "",
    duration = 0.8,
    delay = 0,
    ...props
}) => {
    // If text prop is provided, split by words. Otherwise just animate children wrapper.
    const textVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.33, 1, 0.68, 1] // cubic-bezier for "reveal" feel
            }
        }
    };

    return (
        <div className={`overflow-hidden ${className}`}>
            <MotionWrapper
                variants={textVariants}
                duration={duration}
                delay={delay}
                {...props}
            >
                {/* Ensure block display for proper transform */}
                <span className="inline-block relative">
                    {text || children}
                </span>
            </MotionWrapper>
        </div>
    );
};
