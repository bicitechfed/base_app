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

let IconWifi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M639.04 694.656l44.672-45.76c-52.8-53.76-117.056-83.2-183.488-83.2-65.6 0-129.152 28.8-181.568 81.28l44.672 45.76c42.432-42.752 90.88-63.04 136.96-63.04 46.72 0 95.872 20.864 138.752 65.024zM768.64 561.792l44.672-45.824c-87.936-90.624-198.4-140.672-313.024-140.672-113.792 0-223.616 49.344-311.168 138.752l44.672 45.824c77.248-79.36 171.648-120.576 266.496-120.576 95.552 0 190.72 41.92 268.352 122.496z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M893.696 433.472l44.736-45.824C816.64 261.824 661.44 192 500.288 192 339.904 192 185.408 261.12 64 385.728l44.672 45.888C219.52 317.248 358.592 256 500.352 256c142.464 0 282.24 61.888 393.344 177.472zM565.184 809.6a64 64 0 1 1-128 0 64 64 0 0 1 128 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconWifi.defaultProps = {
  size: 18,
};

IconWifi = React.memo ? React.memo(IconWifi) : IconWifi;

export default IconWifi;
