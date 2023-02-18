'use client';

import Link from '@/components/common/Link';
import { Wrapper } from './styles';

const MenuItem = ({ text, target, open, onOpen }) => {
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
