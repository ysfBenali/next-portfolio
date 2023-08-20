'use client';

import Link from 'next/link';
import { Wrapper } from './styles';

const MenuItem = ({
  text,
  target,
  open,
  onOpen,
}: {
  text: string;
  target: string;
  open: boolean;
  onOpen: (open: boolean) => void;
}) => {
  return (
    <Wrapper>
      <Link
        href={target}
        onClick={() => {
          onOpen(!open);
        }}
      >
        {text}
      </Link>
    </Wrapper>
  );
};

export default MenuItem;
