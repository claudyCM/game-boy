import React from "react";
import PropTypes from "prop-types";

import NextLink from "next/link";

export default function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};
