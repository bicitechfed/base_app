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

let IconArrowDownRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M687.744 483.008L544 626.752V288h-64v338.752L336.256 483.008l-45.248 45.248L512 749.248l220.992-220.992z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M192 896a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192z m0-64h640V192H192v640z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconArrowDownRectangle.defaultProps = {
  size: 18,
};

IconArrowDownRectangle = React.memo ? React.memo(IconArrowDownRectangle) : IconArrowDownRectangle;

export default IconArrowDownRectangle;
