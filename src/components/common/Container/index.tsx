import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-[90%] max-w-[1100px] my-0 mx-auto pl-4 pr-4 md:w-full',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = 'Container';

export default Container;
