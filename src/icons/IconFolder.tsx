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

let IconFolder: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192a64 64 0 0 1 64-64H389.824l8.32 6.08L522.432 224H896a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64V192z m241.088 0H192v608h704v-512H501.632l-8.384-6.08L369.088 192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFolder.defaultProps = {
  size: 18,
};

IconFolder = React.memo ? React.memo(IconFolder) : IconFolder;

export default IconFolder;
