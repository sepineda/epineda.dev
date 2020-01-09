import React from 'react';
import { Flex } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import { Head } from '../components';
import { H2 } from "./Heading";

const PageHeader = (props) => (
  <Flex
    flexDirection="column"
    width={1}
    mb={props.children ? 4 : 3}
    mt={[4, 5]}
    justifyContent="center"
    {...{ ...props, title: undefined }}
  >
    <Head title={props.title} description={props.description}/>
    <H2 alignSelf="center" textAlign="center" mt={0}>
      {props.title}
    </H2>
    {props.children}
  </Flex>
);

PageHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  description: PropTypes.string,
  title: PropTypes.string,
};

export default PageHeader;
