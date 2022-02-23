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

let IconCloseRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M308.352 670.4L466.752 512 308.352 353.6l45.248-45.248L512 466.752l158.4-158.4 45.248 45.248L557.248 512l158.4 158.4-45.248 45.248L512 557.248l-158.4 158.4z"
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

IconCloseRectangle.defaultProps = {
  size: 18,
};

IconCloseRectangle = React.memo ? React.memo(IconCloseRectangle) : IconCloseRectangle;

export default IconCloseRectangle;
