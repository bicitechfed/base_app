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

let IconDownload: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M784.896 404.096L544 644.928V64h-64v580.928L239.104 404.096l-45.248 45.248 295.488 295.488a32 32 0 0 0 45.312 0l295.488-295.488-45.248-45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 736v128a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64v-128h-64v128H192v-128H128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconDownload.defaultProps = {
  size: 18,
};

IconDownload = React.memo ? React.memo(IconDownload) : IconDownload;

export default IconDownload;
