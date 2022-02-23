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

let IconLogout: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576 192v128h64V160a32 32 0 0 0-32-32h-512a32 32 0 0 0-32 32v704a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32V704H576v128H128V192h448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M718.848 336.256L862.528 480H384v64h478.528l-143.68 143.744 45.248 45.248 198.336-198.4a32 32 0 0 0 0-45.248l-198.4-198.336-45.184 45.248z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogout.defaultProps = {
  size: 18,
};

IconLogout = React.memo ? React.memo(IconLogout) : IconLogout;

export default IconLogout;
