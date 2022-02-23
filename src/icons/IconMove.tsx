/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconMove: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M320 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM704 64a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM256 384a64 64 0 1 1 128 0 64 64 0 0 1-128 0zM704 320a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM256 640a64 64 0 1 1 128 0 64 64 0 0 1-128 0zM320 832a64 64 0 1 0 0 128 64 64 0 0 0 0-128zM640 640a64 64 0 1 1 128 0 64 64 0 0 1-128 0zM704 832a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMove.defaultProps = {
  size: 18,
};

IconMove = React.memo ? React.memo(IconMove) : IconMove;

export default IconMove;
