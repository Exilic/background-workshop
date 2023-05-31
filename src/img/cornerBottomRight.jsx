import React from 'react';
import {ReactComponent as BRCorner} from "../img/corner-bl.svg";
import styled from "styled-components";

const BottomRight = styled(BRCorner)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(-90deg);
`;

const CornerBottomRight = () => {
    return (
        <BottomRight />
    );
};

export default CornerBottomRight;