import styled from "styled-components";
import { Box } from "rebass";
import PropTypes from 'prop-types';
import { TextButton } from "./Button";
import Text from "./Text";
import Icon from "./Icon";
import Link from "./Link";

const BreadcrumbLinkWrapper = styled(Box)`
  ${Icon} {
    transition: transform 50ms ease-in-out;
  }

  &:hover ${Icon} {
    transform: translateX(-4px);
  }
`;

const BreadcrumbLink = ({children, mt, href, color}) => (
  <BreadcrumbLinkWrapper mt={mt}>
    <TextButton as={Link} href={href}>
      <Text as="div" color={color} fontSize={1}>
        {children}
      </Text>
    </TextButton>
  </BreadcrumbLinkWrapper>
);

BreadcrumbLink.propTypes = {
  children: PropTypes.node,
  mt: PropTypes.array,
  href: PropTypes.string,
  color: PropTypes.string,
};

export default BreadcrumbLink;
