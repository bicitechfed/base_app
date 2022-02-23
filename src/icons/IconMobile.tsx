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

let IconMobile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448 800h192v-64H448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M256 128a64 64 0 0 1 64-64h448a64 64 0 0 1 64 64v736a64 64 0 0 1-64 64H320a64 64 0 0 1-64-64V128z m64 0v736h448V128H320z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMobile.defaultProps = {
  size: 18,
};

IconMobile = React.memo ? React.memo(IconMobile) : IconMobile;

export default IconMobile;
