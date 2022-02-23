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

let IconUpload: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M239.232 478.08L480 237.312v549.504h64V237.248l240.896 240.896 45.248-45.248-295.488-295.552a32 32 0 0 0-45.248 0L193.92 432.896l45.312 45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 754.752v128a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64v-128h-64v128H192v-128H128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUpload.defaultProps = {
  size: 18,
};

IconUpload = React.memo ? React.memo(IconUpload) : IconUpload;

export default IconUpload;
