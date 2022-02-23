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

let IconRollback: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M237.248 342.656l105.408-105.408L297.344 192l-160 160a32 32 0 0 0 0 45.248l160 160L342.656 512 237.248 406.656H608a192 192 0 0 1 0 384h-320v64h320a256 256 0 1 0 0-512H237.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconRollback.defaultProps = {
  size: 18,
};

IconRollback = React.memo ? React.memo(IconRollback) : IconRollback;

export default IconRollback;
