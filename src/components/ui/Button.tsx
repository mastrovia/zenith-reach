import { cn } from '@/utils/utils';
import Link from 'next/link';
import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  link?: string;
};

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const ButtonElem = (
    <button {...props} className={cn('bg-primary px-7 py-2 cursor-pointer', props.className)}>
      {children}
    </button>
  );

  return <>{props.link ? <Link href={props?.link}>{ButtonElem}</Link> : ButtonElem}</>;
};

export default Button;
