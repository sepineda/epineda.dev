import styled from "styled-components";
import { Flex } from "rebass/styled-components";

const DesktopOnly = styled(Flex)`
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    display: none;
  }
`;

export default DesktopOnly;
