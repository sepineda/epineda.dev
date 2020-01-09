// Adapted from https://github.com/styled-components/styled-components-website/blob/42aba1e04dcc51c94cd8d5a09defe1356d4fc0bc/components/NextPage.js
import styled from "styled-components";
import { Flex } from "rebass/styled-components";
import { ChevronRight, ChevronLeft } from "react-feather";
import PropTypes from 'prop-types';
import Text from "./Text";
import Link from "./Link";
import Icon from "./Icon";

const Wrapper = styled(Link)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  text-align: ${props => props.position};
  margin-${props => (props.position === "left" ? "right" : "left")}: auto;

  @media (min-width: ${props => props.theme.breakpoints[0]}px) {
    max-width: 50%;
  } 
`;

const ICON_PROPS = {
  size: "2em",
  color: "#999",
  strokeWidth: 1
};

const NextPage = ({ title, href, position = "right" }) => (
  <Wrapper href={href} position={position}>
    {position === "left" && (
      <Icon ml={0} mr={1}>
        <ChevronLeft {...ICON_PROPS} />
      </Icon>
    )}
    <Flex flexDirection="column">
      <Text mb={1} fontSize={2} color="#999">
        {position === "left" ? "Previous" : "Next"} post
      </Text>
      <Text fontWeight="bold" color="#666">
        {title}
      </Text>
    </Flex>

    {position === "right" && (
      <Icon>
        <ChevronRight {...ICON_PROPS} />
      </Icon>
    )}
  </Wrapper>
);
NextPage.propTypes = {
  position: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string
};

export default NextPage;
