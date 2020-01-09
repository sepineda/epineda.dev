import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "rebass/styled-components";
import Link from "../Link";
import IsScrolled from "../WithIsScrolled";
import Heading from "../Heading";

const LogoLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const shouldShow = props => {
  if (props.scrolled) {
    if (props.showOnScroll) return true;
    if (props.hideOnScroll) return false;
  }
  if (props.showOnScroll) return false;
  return true;
};

const Handle = styled.span`
  transition: opacity 250ms ease-out, margin 250ms ease-in-out;
  ${props => {
    if (shouldShow(props)) {
      return css`
        opacity: 1;
      `;
    }
    return css`
      opacity: 0;
      margin-right: ${props.marginOnHide || "-.5em"};
    `;
  }};
`;

const Logo = () => (
  <LogoLink href="/">
    <Flex
      flexDirection="column"
      justifyContent="center"
      css={{ width: "144px" }}
    >
      <IsScrolled>
        {({ isScrolled }) => (
          <>
            <Heading
              css={{ transition: "margin 250ms ease-in-out" }}
              // as="h1"
              fontSize={3}
              fontWeight="normal"
              fontFamily="serif"
              alignSelf={["center", "flex-start"]}
            >
              <Handle scrolled={isScrolled} showOnScroll>
                &lt;
              </Handle>
              e
              <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-3.2em;">
                duardo
              </Handle>
              <Handle scrolled={isScrolled} hideOnScroll marginOnHide="-.2em">
                &nbsp;
              </Handle>
              pineda
              <Handle scrolled={isScrolled} default={0} showOnScroll>
                &nbsp;/&gt;
              </Handle>
            </Heading>
          </>
        )}
      </IsScrolled>
    </Flex>
  </LogoLink>
);

export default Logo;
