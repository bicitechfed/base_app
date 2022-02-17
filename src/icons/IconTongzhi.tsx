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

let IconTongzhi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 917.333333c46.933333 0 85.333333-38.4 85.333333-85.333333h-170.666666a85.333333 85.333333 0 0 0 85.333333 85.333333z m256-256v-213.333333c0-130.986667-69.973333-240.64-192-269.653333V149.333333c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64v29.013334C325.546667 207.36 256 316.586667 256 448v213.333333l-85.333333 85.333334v42.666666h682.666666v-42.666666l-85.333333-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTongzhi.defaultProps = {
  size: 18,
};

IconTongzhi = React.memo ? React.memo(IconTongzhi) : IconTongzhi;

export default IconTongzhi;
