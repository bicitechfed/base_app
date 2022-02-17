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

let IconBianjidangqianmianban0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a448 448 0 1 1-0.0512 896.0512A448 448 0 0 1 512 64z m0 51.2a396.8 396.8 0 1 0 0.0512 793.6512A396.8 396.8 0 0 0 512 115.2z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".15"
      />
    </Svg>
  );
};

IconBianjidangqianmianban0.defaultProps = {
  size: 18,
};

IconBianjidangqianmianban0 = React.memo ? React.memo(IconBianjidangqianmianban0) : IconBianjidangqianmianban0;

export default IconBianjidangqianmianban0;
