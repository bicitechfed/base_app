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

let IconMinusRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M320 544h384v-64H320z"
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

IconMinusRectangle.defaultProps = {
  size: 18,
};

IconMinusRectangle = React.memo ? React.memo(IconMinusRectangle) : IconMinusRectangle;

export default IconMinusRectangle;
