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

let IconSwapRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M818.752 566.592H64v64h827.392a33.92 33.92 0 0 0 23.936-57.856L662.656 320l-45.312 45.248 201.408 201.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSwapRight.defaultProps = {
  size: 18,
};

IconSwapRight = React.memo ? React.memo(IconSwapRight) : IconSwapRight;

export default IconSwapRight;
