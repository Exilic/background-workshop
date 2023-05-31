import React from 'react';
import {ReactComponent as ULCorner} from "../img/corner-bl.svg";
import styled from "styled-components";

const UpperLeft = styled(ULCorner)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(90deg);
`;

const CornerUpperLeft = () => {
    return (
        <UpperLeft />
    );
};

export default CornerUpperLeft;