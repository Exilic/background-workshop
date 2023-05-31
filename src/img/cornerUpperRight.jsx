import React from 'react';
import {ReactComponent as BRCorner} from "../img/corner-bl.svg";
import styled from "styled-components";

const UpperRight = styled(BRCorner)`
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(180deg);
`;

const CornerUpperRight = () => {
    return (
        <UpperRight />
    );
};

export default CornerUpperRight;