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

let IconPoweroff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64v448h64V64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 544A416 416 0 0 1 349.952 176l32 55.488a352 352 0 1 0 323.968 0l32.128-55.488A416 416 0 1 1 128 544z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPoweroff.defaultProps = {
  size: 18,
};

IconPoweroff = React.memo ? React.memo(IconPoweroff) : IconPoweroff;

export default IconPoweroff;
