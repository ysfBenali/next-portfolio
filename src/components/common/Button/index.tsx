import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'text-white dark:text-gray-900 bg-primary dark:bg-primaryDark hover:bg-dodger-blue-700 hover:dark:bg-dodger-blue-500 w-36 font-semibold py-3 px-5 rounded-[5rem]',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
