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

let IconImage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 512a128 128 0 1 0 0-256 128 128 0 0 0 0 256z m0-64a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 832a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v640z m64-82.752l192-192L658.752 832H192v-82.752z m0-90.496V192h640v640h-82.752L384 466.752l-192 192z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconImage.defaultProps = {
  size: 18,
};

IconImage = React.memo ? React.memo(IconImage) : IconImage;

export default IconImage;
