import React from 'react';
import { TypographyProps } from './Typography.types';
import styles from './Typography.module.scss';

const variantTagMap: Record<string, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'regular',
  color = 'black',
  as,
  children,
  className = '',
  ...props
}) => {
  const Component = as || variantTagMap[variant] || 'p';

  return (
    <Component
      className={`
        ${styles.typography}
        ${styles[variant]}
        ${styles[weight]}
        ${styles[`color-${color}`]}
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};
