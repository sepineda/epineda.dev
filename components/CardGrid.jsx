import React from "react";
import { Flex } from "rebass";

const CardGrid = (props) => (
  <Flex flexDirection="row" flexWrap="wrap" m={[-1, -2]} {...props} />
);

export default CardGrid;
