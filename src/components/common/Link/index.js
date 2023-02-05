'use client';

import React, { forwardRef } from 'react';
import NextLink from 'next/link';

/**
 * TODO: Replace it with 'next/Link' if the scroll issue was fixed in the next release.
 * 
 * 
 * Description: This component is used to resolve the Scroll to #HashID
 issue, by using an <a> tag when the URL contains a #.
 */

const Link = forwardRef(
  (
    { children, href = '', newWindow, prefetch = true, ...rest },
    forwardedRef,
  ) => {
    if (newWindow) {
      return (
        <a
          href={href}
          ref={forwardedRef}
          rel="noreferrer"
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      );
    }

    if (!href) {
      return (
        <a ref={forwardedRef} {...rest}>
          {children}
        </a>
      );
    }

    if (href.includes('#')) {
      return (
        <a href={href} ref={forwardedRef} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <NextLink href={href} prefetch={prefetch} ref={forwardedRef} {...rest}>
        {children}
      </NextLink>
    );
  },
);

Link.displayName = Object.keys({ Link })[0];

export default Link;
