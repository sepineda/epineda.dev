import React from 'react';
import { Flex } from 'rebass';

const Main = (props) => (
  <Flex
    as="main"
    flexDirection="column"
    alignItems={['center', 'flex-start']}
    {...props}
  />
);

export default Main;
