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

let IconDiscountFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M447.168 341.12A75.008 75.008 0 1 1 341.12 447.104 75.008 75.008 0 0 1 447.168 341.12z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 494.72a64 64 0 0 0 18.752 45.248l378.368 378.368a64 64 0 0 0 90.496 0l302.72-302.72a64 64 0 0 0 0-90.496L539.968 146.752A64 64 0 0 0 494.72 128H128v366.72z m364.416-198.912a139.008 139.008 0 1 1-196.608 196.608 139.008 139.008 0 0 1 196.608-196.608z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconDiscountFilled.defaultProps = {
  size: 18,
};

IconDiscountFilled = React.memo ? React.memo(IconDiscountFilled) : IconDiscountFilled;

export default IconDiscountFilled;
