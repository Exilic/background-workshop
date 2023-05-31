import React from 'react';
import {ReactComponent as BLCorner} from "../img/corner-bl.svg";
import styled from "styled-components";

const BottomLeft = styled(BLCorner)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const CornerBottomLeft = () => {
    return (
        <BottomLeft />
    );
};

export default CornerBottomLeft;