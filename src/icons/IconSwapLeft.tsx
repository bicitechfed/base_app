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

let IconSwapLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.624 566.592h754.752v64H97.92a33.92 33.92 0 0 1-24-57.856L326.784 320l45.184 45.248-201.344 201.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSwapLeft.defaultProps = {
  size: 18,
};

IconSwapLeft = React.memo ? React.memo(IconSwapLeft) : IconSwapLeft;

export default IconSwapLeft;
