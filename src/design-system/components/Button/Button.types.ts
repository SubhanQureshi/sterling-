import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'hoverState';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}
