import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';
import Link from './Link';

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
  z-index: 1;
  ${(props) => props.centered && `margin: 0 auto;`} ${Link} {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Paragraph = ({ centered, as, ...props }) => (
  <Wrapper centered={centered} as={as}>
    <Text color="#333" mb={3} fontSize="18px" lineHeight={1.6} {...props} />
  </Wrapper>
);
Paragraph.propTypes = {
  centered: PropTypes.bool,
  as: PropTypes.string,
};

export default Paragraph;
