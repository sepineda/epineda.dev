import styled from "styled-components";
import { Box } from "rebass/styled-components";

export const createToggle = (name) => {
  const Toggle = styled.label.attrs({
    htmlFor: name
  })``;

  const Display = styled(Box)``;

  const State = styled.input.attrs({
    type: "checkbox",
    id: name
  })`
    display: none;

    &:checked ~ ${Display} {
      display: block;
    }

    &:not(:checked) ~ ${Display} {
      display: none;
    }
  `;

  return { Toggle, State, Display };
};
