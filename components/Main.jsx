import React from 'react';
import { Flex } from 'rebass/styled-components';

const Main = (props) => (
  <Flex
    as="main"
    flexDirection="column"
    alignItems={['center', 'flex-start']}
    {...props}
  />
);

export default Main;
