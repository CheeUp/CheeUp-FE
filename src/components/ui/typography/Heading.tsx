import { PropsWithChildren } from 'react';

interface PHeading extends PropsWithChildren {
  className?: string;
}

export function H1({ children, className = '' }: PHeading) {
  return <h1 className={'text-heading1 font-bold ' + className}>{children}</h1>;
}

export function H2({ children, className = '' }: PHeading) {
  return <h2 className={'text-heading2 font-bold ' + className}>{children}</h2>;
}

export function H3({ children, className = '' }: PHeading) {
  return <h3 className={'text-heading3 font-bold ' + className}>{children}</h3>;
}

export function H4({ children, className = '' }: PHeading) {
  return <h4 className={'text-heading4 font-bold ' + className}>{children}</h4>;
}
