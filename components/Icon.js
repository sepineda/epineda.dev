import styled from "styled-components";
import { Box } from "rebass/styled-components";

export default styled(Box).attrs(props => ({
  ml: typeof props.ml === "number" ? props.ml : 1,
  css: {
    verticalAlign:
      typeof props.verticalAlign === "string" ? props.verticalAlign : "middle",
    display: "inline-block",
    ...props.css
  }
}))``;
