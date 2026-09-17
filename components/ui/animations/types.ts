import type React from 'react';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface BaseAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    viewportMargin?: string;
    once?: boolean;
}
