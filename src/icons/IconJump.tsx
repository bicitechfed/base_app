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

let IconJump: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M146.752 877.248c12.032 11.968 28.288 18.752 45.248 18.752h640a64.064 64.064 0 0 0 64-64V544h-64V832H192V192h288V128H192a64.064 64.064 0 0 0-64 64v640c0 16.96 6.784 33.28 18.752 45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M576 192V128h288a32 32 0 0 1 32 32V448h-64V237.248L557.248 512 512 466.752 786.752 192H576z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconJump.defaultProps = {
  size: 18,
};

IconJump = React.memo ? React.memo(IconJump) : IconJump;

export default IconJump;
