import React from 'react';
import { css } from "styled-components";
import { Flex } from 'rebass';
import PropTypes from 'prop-types';
import { Twitter, GitHub } from 'react-feather';
import Text from './Text';
import Link from './Link';
import Icon from './Icon';
import Layout from './Layout';

const FooterColumn = ({ title, last, children }) => (
  <Flex flexDirection="column" flex={1} mb={4} mr={last === true ? 0 : 4}>
    <Text mb={3} fontWeight="bold" color="#333">
      {title}
    </Text>
    {children}
  </Flex>
);
FooterColumn.propTypes = {
  title: PropTypes.string,
  last: PropTypes.bool,
  children: PropTypes.node,
}

const FooterListItem = ({ Icon: IconComp, rel, children, href }) => (
  <Text as="div" my={1} color="#666">
    <Link href={href} rel={rel}>
      {IconComp && (
        <Icon mr={2} ml={0}>
          <IconComp size="1em" />
        </Icon>
      )}
      {children}
    </Link>
  </Text>
);
FooterListItem.propTypes = {
  Icon: PropTypes.func,
  children: PropTypes.node,
  href: PropTypes.string,
  rel: PropTypes.string,
}

const Footer = () => (
  <Flex
    py={5}
    mt={5}
    as="footer"
    bg="#fff"
    css={css`
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    `}
  >
    <Layout width={[1, 0.5]}>
      <Flex flexDirection={['column', 'row']}>
        <FooterColumn title="About this place" width={0.5}>
          <Text color="#666" lineHeight={1.5}>
            Welcome to my personal website! I am Eduardo Pineda, a Full-Stack
            Developer from Costa Rica 🇨🇷.
          </Text>
        </FooterColumn>
        <FooterColumn las title="Social Media">
          <FooterListItem Icon={GitHub} href="https://github.com/sepineda" rel="me">
            See my repos on Github
          </FooterListItem>
          <FooterListItem
            Icon={Twitter}
            rel="me"
            href="https://twitter.com/sepineda"
          >
            Follow me on Twitter
          </FooterListItem>
          <FooterListItem
            href="https://mxstbr.com/"
          >
            Based on web site by Max Stoiber
          </FooterListItem>
        </FooterColumn>
      </Flex>
    </Layout>
  </Flex>
);

export default Footer;
