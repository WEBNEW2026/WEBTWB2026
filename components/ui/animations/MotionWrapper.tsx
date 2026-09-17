import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { BaseAnimationProps } from './types';

interface MotionWrapperProps extends BaseAnimationProps {
    variants?: MotionProps['variants'];
    initial?: string | object;
    whileInView?: string | object;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
    children,
    className = "",
    variants,
    initial = "hidden",
    whileInView = "visible",
    viewportMargin = "-50px",
    once = true
}) => {
    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={{ once, margin: viewportMargin }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};
