import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const WideSection = styled(Box)`
  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    max-width: 100%;
  }
`;

const WideSectionStyled = (props) => (
  <WideSection
    width={["100%", "150%", "200%"]}
    ml={[0, "-25%", "-50%"]}
    {...props}
  />
);

export default WideSectionStyled;
