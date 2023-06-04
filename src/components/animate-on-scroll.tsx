import * as React from 'react';
import { ReactNode } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export type Animations =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInRight'
  | 'fadeInLeft'
  | 'jackInTheBox'
  | 'flipInX';

export interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  onIn?: Animations;
  onOut?: Animations;
  delay?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  onIn,
  onOut,
  className,
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  const animationIn = onIn && `animate__${onIn}`;
  const animationOut = onOut && `animate__${onOut}`;

  return (
    <ScrollAnimation
      animateIn={animationIn}
      animateOut={animationOut}
      animateOnce={once}
      delay={delay}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
}
