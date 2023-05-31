import React from 'react';
import {ReactComponent as Corner} from "../img/corner.svg";
import styled from "styled-components";

const StyledCorner = styled(Corner)`
  position: absolute;
  .cls-1 {
    fill: ${props => props.$tint};
  }
`;
const BottomLeft = styled(StyledCorner)`
  bottom: 0;
  left: 0;
`;

const BottomRight = styled(StyledCorner)`
  bottom: 0;
  right: 0;
  transform: rotate(-90deg);
`;

const UpperLeft = styled(StyledCorner)`
  top: 0;
  left: 0;
  transform: rotate(90deg);
`;

const UpperRight = styled(StyledCorner)`
  top: 0;
  right: 0;
  transform: rotate(180deg);
`;

const CornerBackground = ({tint}) => {
    return (
        <div>
            <BottomLeft $tint={tint}/>
            <BottomRight $tint={tint}/>
            <UpperLeft $tint={tint}/>
            <UpperRight $tint={tint}/>
        </div>
    );
};

export default CornerBackground;